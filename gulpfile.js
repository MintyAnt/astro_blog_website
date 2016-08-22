
var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync').create();
var fs = require('fs');
var runSequence = require('run-sequence');
var watchify = require('watchify');

var babelrc = JSON.parse(fs.readFileSync('.babelrc', 'utf-8'));
var browserifyConfig = {
    entries: ['./src/js/index.js'],
    debug: true,
    transform: [[babelify, babelrc]],
};
var watchifyConfig = Object.assign({}, browserifyConfig, {
    cache: {},
    packageCache: {},
    plugin: [watchify],
});

var browserifyBundler = browserify(browserifyConfig);
var watchifyBundler = browserify(watchifyConfig)
    .on('update', function(changes) {
        console.log('***>> Change in files detcted <<***', changes);
        runSequence(['bundle:watch']);
    });
var bundle = function(done) {
    var bundler = (this.watchify ? watchifyBundler : browserifyBundler);
    return bundler
        .bundle()
        .on('error', function(err) {
            console.log('Error : ' + err.message);
            done();
        })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./public/js'));
};

gulp.task('bundle', bundle.bind({ watchify: true }));

gulp.task('html', function() {
    gulp.src('./src/*.html').pipe(gulp.dest('./public/'));
});

gulp.task('serve', function() {
    browserSync.init({
        port: 3000,
        ghostMode: false,
        server: {
            baseDir: './public',
        },
    });
});

gulp.task('watch', function() {
    gulp.watch('./src/*.html', ['html']);
    gulp.watch('./test/**/*.js', ['test']);
    gulp.watch('./public/**/*', browserSync.reload);
});

gulp.task('default', function(cb) {
    runSequence('watch', 'html', 'bundle', 'serve', cb);
});
