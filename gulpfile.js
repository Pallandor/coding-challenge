'use strict';

const gulp = require('gulp');
const mocha = require('gulp-mocha');
const plumber = require('gulp-plumber');
const wait = require('gulp-wait');
const webpack = require("webpack");
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config');
const webpackTestConfig = require('./webpack/webpackTest.config');

gulp.task('build-server', () => {
  return gulp.src('./server/index.js')
    .pipe(webpackStream(webpackConfig))
    .pipe(gulp.dest('build/'));
  });

gulp.task('watch-server', () => {
  gulp.watch('./server/**/*.*', ['build-server']);
});

gulp.task('build-server-test', () => {
  return gulp.src('./test/server/index.js')
    .pipe(webpackStream(webpackTestConfig))
    .pipe(gulp.dest('build-test/'));
  });

gulp.task('test-server', done => {
  var mochaErr;
  gulp.src('./build-test/serverSpec.js', {read: false})
    .pipe(plumber())
    .pipe(wait(1500))
    .pipe(mocha())
    .on('end', () => {
      done();
    });
});

gulp.task('default', ['build-server-test','test-server', 'build-server'], () => {
  gulp.watch('./server/**/*.js', {debounceDelay: 500}, ['build-server-test', 'test-server', 'build-server']);
  gulp.watch('./test/server/**/*.js', {debounceDelay: 500}, ['build-server-test', 'test-server']);
});

gulp.task('test', ['build-server-test','test-server'], () => {
  gulp.watch('./server/**/*.js', {debounceDelay: 500}, ['build-server-test', 'test-server']);
  gulp.watch('./test/server/**/*.js', {debounceDelay: 500}, ['build-server-test', 'test-server']);
});
