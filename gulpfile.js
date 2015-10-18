'use strict';

// Dependencies
var gulp = require('gulp');
var del = require('del');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');

gulp.task('clean', function(callback) {
  return del(['./dist'], callback);
});

gulp.task('build:css', function() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', gutil.log))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(minifyCss({compatibility: 'ie8'}))
    .on('error', gutil.log)
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('build:js', function() {
  return gulp.src(['bower_components/bigfoot/dist/bigfoot.min.js',
    'bower_components/bootstrap/js/dist/util.js',
    'bower_components/bootstrap/js/dist/scrollspy.js',
    'src/js/**/*.js'])
    .pipe(concat('site.js'))
    .pipe(uglify())
    .on('error', gutil.log)
    .pipe(rename('site.min.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('default', function(callback) {
  return runSequence(
    'clean',
    ['build:css', 'build:js'],
    callback
  );
});
