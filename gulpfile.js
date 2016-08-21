/*
    eslint
    no-var: 0,
    prefer-arrow-callback: 0,
    prefer-template: 0,
    no-console: 0
*/

// "require hook" for transpiling es6 at runtime (used in mocha tests)
var babel = require('babel-core/register');

// browserify transform for transpiling es6/jsx (used during bundling)
var babelify = require('babelify');

var browserify = require('browserify');
var browserSync = require('browser-sync').create();
var eslint = require('gulp-eslint');
var fs = require('fs');
var gulp = require('gulp');
var gutil = require('gulp-util');
var mocha = require('gulp-mocha');
var source = require('vinyl-source-stream');
var runSequence = require('run-sequence');
var watchify = require('watchify');

// babel config from `projectRoot/.babelrc`
var babelrc = JSON.parse(fs.readFileSync('.babelrc', 'utf-8'));

var browserifyConfig = {
    entries: ['./src/js/index.js'],
    debug: true, // enable sourcemaps by default
    transform: [[babelify, babelrc]],
};
var watchifyConfig = Object.assign({}, browserifyConfig, {
    cache: {},
    packageCache: {},
    plugin: [watchify],
});

/* bundlers:
    `b` is vanilla browserify
    `w` watches + caches packages */
var b = browserify(browserifyConfig);
var w = browserify(watchifyConfig)
        .on('update', function (changes) {
            console.log('File(s) changed...', changes);
            runSequence(['bundle:watch']);
        });

var doBundle = function (done) {
    var task = (this.watchify ? w : b)
        .bundle()
        .on('error', function (err) {
            gutil.log('Browserify error\n' + err.toString() + '\n' + err.codeFrame);
            done();
        })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./dist/js'));

    return task;
};

// bundle task for single builds, no watchify
gulp.task('bundle', doBundle.bind({ watchify: false }));
gulp.task('bundle:watch', doBundle.bind({ watchify: true }));

gulp.task('watch', function () {
    gulp.watch('./src/*.html', ['html']);
    gulp.watch('./src/assets/**/*', ['assets']);
    gulp.watch('./test/**/*.js', ['test']);
    gulp.watch('./dist/**/*', browserSync.reload);
});

gulp.task('html', function () {
    gulp.src('./src/*.html').pipe(gulp.dest('./dist/'));
});

gulp.task('assets', function () {
    gulp.src('./src/assets/**').pipe(gulp.dest('./dist/assets'));
});

gulp.task('test', function () {
    gulp.src(['./test/dom-mock.js', './test/**/*-test.js'], { read: false })
        .pipe(
            mocha({
                compilers: {
                    js: babel,
                },
            })
        )
        .on('error', function (err) {
            console.log(err);
        });
});

gulp.task('serve', function () {
    browserSync.init({
        port: 3000,
        server: {
            baseDir: './dist',
        },
        ghostMode: false,
    });
});

gulp.task('lint', function () {
    return gulp.src(['./src/js/**/*.js', '!./node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('static', ['html', 'assets']);
gulp.task('build', ['static', 'bundle']);
gulp.task('dev', ['static', 'bundle:watch']);

gulp.task('default', function (cb) {
    runSequence('watch', 'dev', 'serve', cb);
});
