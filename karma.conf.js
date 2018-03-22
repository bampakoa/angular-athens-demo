module.exports = function (config) {
    config.set({
        
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: './',
        
        // frameworks to use
        // some available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],
        
        // list of files / patterns to load in the browser
        files: [
            "./bower_components/jquery/dist/jquery.js",
            "./bower_components/toastr/toastr.js",
            './bower_components/angular/angular.js',
            './bower_components/angular-animate/angular-animate.js',
            './bower_components/angular-aria/angular-aria.js',
            './bower_components/angular-material/angular-material.js',
            './bower_components/angular-mocks/angular-mocks.js',
            './bower_components/angular-sanitize/angular-sanitize.js',
            './bower_components/angular-ui-router/release/angular-ui-router.js',
            
            './src/app/app.js',
            './src/app/**/*.module.js',
            './src/app/**/*.js',
            './src/app/**/*.html',

            './test-helpers/mockData.js'
        ],
        
        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'src/app/**/!(*spec).js': 'coverage',
            'src/app/**/*.html': ['ng-html2js']
        },
        
        // test results reporter to use
        // possible values: 'dots', 'progress', 'coverage'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage'],
        
        coverageReporter: {
            type: 'lcov',
            dir: 'test/coverage'
        },
        
        // web server port
        port: 9876,
        
        // enable / disable colors in the output (reporters and logs)
        colors: true,
        
        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,
        
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,
        
        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        //        browsers: ['Chrome', 'ChromeCanary', 'FirefoxAurora', 'Safari', 'PhantomJS'],
        browsers: ['PhantomJS'],
        
        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        ngHtml2JsPreprocessor: {
            stripPrefix: 'src/app/',

            // the name of the Angular module to create
            moduleName: 'templates'
        }
    });
};

