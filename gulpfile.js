var gulp = require('gulp');
var plug = require('gulp-load-plugins')();

/**
 * Create $templateCache from the html templates
 * @return {Stream}
 */
gulp.task('templatecache', function () {
  plug.watch('./src/app/**/*.html', { ignoreInitial: false }, function(events, done) {
    gulp
        .src('./src/app/**/*.html')
        .pipe(plug.htmlmin({
            collapseWhitespace: true
        }))
        .pipe(plug.angularTemplatecache('templates.js', {
            module: 'ngaApp.core',
            standalone: false,
            root: 'app/'
        }))
        .pipe(gulp.dest('./src/app/'))
  });
});
