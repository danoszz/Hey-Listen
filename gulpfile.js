'use strict';

// ----------- Dependencies

var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    cleancss = require('gulp-clean-css'),
    header = require('gulp-header'),
    maps = require('gulp-sourcemaps'),
    cache = require('gulp-cache'),
    del = require('del'),
    runSequence = require('run-sequence'),
    pkg = require('./package.json');

  var banner = [
      '/*!\n' +
      ' * <%= pkg.name %>\n' +
      ' * <%= pkg.title %>\n' +
      ' * <%= pkg.url %>\n' +
      ' * @author <%= pkg.author %>\n' +
      ' * @version <%= pkg.version %>\n' +
      ' * Copyright ' + new Date().getFullYear() + '. <%= pkg.license %> licensed.\n' +
      ' */',
      '\n'
    ].join('');

// ----------- Variables

var aj = 'assets/js/',
    ac = 'assets/css/',
    ai = 'assets/images/',
    sj = 'src/js/',
    // SCSS files:
    sg = 'src/scss/**/*.scss',
    // Kirby building blocks:
    site_s = 'site/snippets/*.php',
    site_t = 'site/templates/*.php',
    // Kirby content:
    kc = 'content/**/*.txt';

// ----------- Static Server & Watch Files

/*
THIS WILL BE OUR DEFAULT TASK.
To develop Kirby locally:
1. gulp build
2. gulp
*/

gulp.task('serve', ['compileSass'], function() {

    // Note: I'm using MAMP PRO for my local server
    browserSync.init({
        proxy: 'localhost:8888/hey-listen',
        notify: false
    });

    gulp.watch(sg, ['compileSass']);
    gulp.watch(sj, ['minifyScripts']);
    gulp.watch(site_s).on('change', browserSync.reload);
    gulp.watch(site_t).on('change', browserSync.reload);
    gulp.watch(kc).on('change', browserSync.reload);

});

// ----------- Concat & Minify JS

gulp.task('concatScripts', function() {
  return gulp.src([
    sj + 'jquery-2.1.4.min.js',
    sj + 'main.js'
  ])
  .pipe(concat('app.js'))
  .pipe(gulp.dest(sj));
});

// Now minify it, and put it in assets/js/
gulp.task('minifyScripts', ['concatScripts'], function() {
  return gulp.src(sj + 'app.js')
    .pipe(maps.init())
    .pipe(uglify())
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(rename('app.min.js'))
    .pipe(maps.write('./'))
    .pipe(gulp.dest(aj));
});

// ----------- Compile Sass directly into assets/css/

gulp.task('compileSass', function () {
  return gulp.src('src/scss/style.scss')
    .pipe(maps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(rename('styles.min.css'))
    .pipe(maps.write('./'))
    .pipe(gulp.dest(ac))
    .pipe(browserSync.stream());
});


// ----------- Cleanup

gulp.task('clean', function(callback) {
  del(ac + '*.css*');
  del(aj + '*.js*');
  //del(ai + '*'); add this when we're processing images with Gulp
  del(sj + 'app.js');
  return cache.clearAll(callback);
})

// ----------- Build

gulp.task('build', function(callback) {
  runSequence('clean', 'compileSass', 'minifyScripts', callback);
});

// ----------- DEFAULT

gulp.task('default', ['serve']);
