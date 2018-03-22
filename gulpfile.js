var gulp = require('gulp');
var del = require('del');
var glob = require('glob');
var Server = require('karma').Server;
var merge = require('merge-stream');
var paths = require('./gulp.config.json');
var plato = require('plato');
var plug = require('gulp-load-plugins')();

var log = plug.util.log;

/**
 * List the available gulp tasks
 */
gulp.task('help', plug.taskListing);

/**
 * Lint the code, create coverage report, and a visualizer
 * @return {Stream}
 */
gulp.task('analyze', function () {
    log('Analyzing source with JSHint, JSCS, and Plato');
    
    var jshint = analyzejshint(paths.js);
    var jscs = analyzejscs(paths.js);
    
    startPlatoVisualizer();
    
    return merge(jshint, jscs);
});

/**
 * Create $templateCache from the html templates
 * @return {Stream}
 */
gulp.task('templatecache', function () {
    log('Creating an AngularJS $templateCache');
    
    return gulp
        .src(paths.htmltemplates)
        .pipe(plug.htmlmin({
            collapseWhitespace: true
        }))
        .pipe(plug.angularTemplatecache('templates.js', {
            module: 'ngaApp.core',
            standalone: false,
            root: 'src/app/'
        }))
        .pipe(gulp.dest(paths.build));
});

/**
 * Minify and bundle the app's JavaScript
 * @return {Stream}
 */
gulp.task('js', ['analyze', 'templatecache'], function () {
    log('Bundling, minifying, and copying the app\'s JavaScript');
    
    var source = [].concat(paths.js, paths.build + 'templates.js', '!./src/app/**/*.spec.js');
    return gulp
        .src(source)
        .pipe(plug.concat('all.min.js'))
        .pipe(plug.ngAnnotate({
            add: true,
            single_quotes: true
        }))
        .pipe(plug.bytediff.start())
        .pipe(plug.uglify({
            mangle: true
        }))
        .pipe(plug.bytediff.stop(bytediffFormatter))
        .pipe(gulp.dest(paths.build));
});

/**
 * Copy the Vendor JavaScript
 * @return {Stream}
 */
gulp.task('vendorjs', function () {
    log('Bundling, minifying, and copying the Vendor JavaScript');
    
    return gulp.src(paths.vendorjs)
        .pipe(plug.concat('vendor.min.js'))
        .pipe(plug.bytediff.start())
        .pipe(plug.uglify())
        .pipe(plug.bytediff.stop(bytediffFormatter))
        .pipe(gulp.dest(paths.build));
});

/**
 * Minify and bundle the CSS
 * @return {Stream}
 */
gulp.task('css', function () {
    log('Bundling, minifying, and copying the app\'s CSS');
    
    return gulp.src(paths.css)
        .pipe(plug.concat('all.min.css'))// Before bytediff or after
        .pipe(plug.autoprefixer('last 2 version', '> 5%'))
        .pipe(plug.bytediff.start())
        .pipe(plug.cssnano({safe: true}))
        .pipe(plug.bytediff.stop(bytediffFormatter))
        .pipe(gulp.dest(paths.build));
});

/**
 * Minify and bundle the Vendor CSS
 * @return {Stream}
 */
gulp.task('vendorcss', function () {
    log('Compressing, bundling, copying vendor CSS');
    
    var vendorFilter = plug.filter(['**/*.css']);
    
    return gulp.src(paths.vendorcss)
        .pipe(vendorFilter)
        .pipe(plug.concat('vendor.min.css'))
        .pipe(plug.bytediff.start())
        .pipe(plug.cssnano({safe: true}))
        .pipe(plug.bytediff.stop(bytediffFormatter))
        .pipe(gulp.dest(paths.build));
});

/**
 * Copy fonts
 * @return {Stream}
 */
gulp.task('fonts', function () {
    log('Copying fonts');

    // Simple Line Icons
    var sli = gulp
        .src(paths.slifonts)
        .pipe(gulp.dest(paths.build + 'fonts'));
    
    // Font Awesome
    var fa = gulp
        .src(paths.fafonts)
        .pipe(gulp.dest(paths.build + 'fonts'));

    return merge(sli, fa);
});

/**
 * Compress images
 * @return {Stream}
 */
gulp.task('images', function () {
    log('Compressing, caching, and copying images');

    var logo = gulp
        .src('favicon.ico')
        .pipe(gulp.dest(paths.build));

    var images = gulp
        .src(paths.images)
        .pipe(plug.cache(plug.imagemin({
            optimizationLevel: 3
        })))
        .pipe(gulp.dest(paths.build + 'images'));

    return merge(logo, images);
});

/**
 * Inject all the files into the new index.html
 * rev, but no map
 * @return {Stream}
 */
gulp.task('rev-and-inject', ['js', 'vendorjs', 'css', 'vendorcss'], function () {
    log('Rev\'ing files and building index.html');
    
    var minified = paths.build + '**/*.min.*';
    var index = 'index.html';
    var minFilter = plug.filter(['**/*.min.*', '!**/*.map'], { restore: true });
    var indexFilter = plug.filter(['**/index.html'], { restore: true });
    
    var stream = gulp
        // Write the revisioned files
        .src([].concat(minified, index))// add all built min files and index.html
        .pipe(minFilter)// filter the stream to minified css and js
        .pipe(plug.rev())// create files with rev's
        .pipe(gulp.dest(paths.build))// write the rev files
        .pipe(minFilter.restore)// remove filter, back to original stream

    // inject the files into index.html
    .pipe(indexFilter)// filter to index.html
    .pipe(inject('vendor.min.css', 'inject-vendor'))
        .pipe(inject('all.min.css'))
        .pipe(inject('vendor.min.js', 'inject-vendor'))
        .pipe(inject('all.min.js'))
        .pipe(gulp.dest(paths.build))// write the rev files
    .pipe(indexFilter.restore)// remove filter, back to original stream

    // replace the files referenced in index.html with the rev'd files
    .pipe(plug.revReplace())// Substitute in new filenames
    .pipe(gulp.dest(paths.build))// write the index.html file changes
    .pipe(plug.rev.manifest())// create the manifest (must happen last or we screw up the injection)
    .pipe(gulp.dest(paths.build)); // write the manifest
    
    function inject(path, name) {
        var pathGlob = paths.build + path;
        var options = {
            ignorePath: paths.build.substring(1),
            addRootSlash: false
        };
        if (name) {
            options.name = name;
        }
        return plug.inject(gulp.src(pathGlob, { read: false }), options);
    }
});

/**
 * Build the optimized app
 * @return {Stream}
 */
gulp.task('build', ['rev-and-inject', 'images', 'fonts'], function () {
    log('Building the optimized app');
    
    return gulp.src('').pipe(plug.notify({
        onLast: true,
        message: 'Built code!'
    }));
});

/**
 * Remove all files from the build folder
 * One way to run clean before all tasks is to run
 * from the cmd line: gulp clean && gulp build
 * @return {Stream}
 */
gulp.task('clean', function (cb) {
    var mapFiles = "./src/app/**/*.map";

    log('Cleaning: ' + plug.util.colors.blue(paths.build));
    log('Cleaning: ' + plug.util.colors.blue(paths.report));
    log('Cleaning: ' + plug.util.colors.blue(paths.js));
    log('Cleaning: ' + plug.util.colors.blue(mapFiles));
    
    var delPaths = [].concat(paths.build, paths.report, paths.js, mapFiles);
    del(delPaths, cb);
});

/**
 * clears gulp cache
 */
gulp.task('clear-cache', function (done) {
    return plug.cache.clearAll(done);
});

/**
 * Run specs once and exit
 * To start servers and run midway specs as well:
 * @return {Stream}
 */
gulp.task('test', function (done) {
    startTests(true, done);
});

/**
 * Run specs and wait.
 * Watch for file changes and re-run tests on each change
 */
gulp.task('autotest', function (done) {
    startTests(false, done);
});

/**
 * Start the tests using karma.
 * @param  {boolean} singleRun - True means run once and end (CI), or keep running (dev)
 * @param  {Function} done - Callback to fire when karma is done
 * @return {undefined}
 */
function startTests(singleRun, done) {
    var karma = new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: !!singleRun
    }, done);

    karma.start();
}

/**
 * Formatter for bytediff to display the size changes after processing
 * @param  {Object} data - byte data
 * @return {String}      Difference in bytes, formatted
 */
function bytediffFormatter(data) {
    var difference = (data.savings > 0) ? ' smaller.' : ' larger.';
    return data.fileName + ' went from ' +
        (data.startSize / 1000).toFixed(2) + ' kB to ' + (data.endSize / 1000).toFixed(2) + ' kB' +
        ' and is ' + formatPercent(1 - data.percent, 2) + '%' + difference;
}

/**
 * Format a number as a percentage
 * @param  {Number} num       Number to format as a percent
 * @param  {Number} precision Precision of the decimal
 * @return {String}           Formatted percentage
 */
function formatPercent(num, precision) {
    return (num * 100).toFixed(precision);
}

/**
 * Execute JSHint on given source files
 * @param  {Array} sources
 * @param  {String} overrideRcFile
 * @return {Stream}
 */
function analyzejshint(sources, overrideRcFile) {
    var jshintrcFile = overrideRcFile || './.jshintrc';
    log('Running JSHint');
    log(sources);
    return gulp
        .src(sources)
        .pipe(plug.jshint(jshintrcFile))
        .pipe(plug.jshint.reporter('jshint-stylish', {verbose: true}));
}

/**
 * Execute JSCS on given source files
 * @param  {Array} sources
 * @return {Stream}
 */
function analyzejscs(sources) {
    log('Running JSCS');
    return gulp
        .src(sources)
        .pipe(plug.jscs('./.jscsrc'));
}

/**
 * Start Plato inspector and visualizer
 */
function startPlatoVisualizer() {
    log('Running Plato');
    
    var files = glob.sync('./src/app/**/*.js');
    var excludeFiles = /\/src\/app\/.*\.spec\.js/;
    
    var options = {
        title: 'Plato Inspections Report',
        exclude: excludeFiles
    };
    var outputDir = './report/plato';
    
    plato.inspect(files, outputDir, options, platoCompleted);
    
    function platoCompleted(report) {
        var overview = plato.getOverviewReport(report);
        log(overview.summary);
    }
}
