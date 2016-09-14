'use strict';

const fs = require('fs');
const del = require('del');
const gulp = require('gulp');
const mocha = require('gulp-mocha');
const plumber = require('gulp-plumber');
const nodemon = require('gulp-nodemon');
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

gulp.task('clean-server', () => {
  return del([
    'build/**/*',
  ]);
});

gulp.task('nodemon', cb => {
  let started = false;
  return nodemon({
    script: './build/server',
    watch: ['./build'],
    ext: 'js'
  }).on('start', () => {
    if (!started) {
      cb();
      started = true;
    }
  })
  .on('crash', () => {
    console.log('nodemon.crash');
  })
  .on('restart', () => {
    console.log('nodemon.restart');
  })
  .once('quit', () => {
    process.exit();
  });
});

gulp.task('default', ['clean-server', 'build-server-test','test-server', 'build-server'], () => {
  gulp.watch('./server/**/*.js', {debounceDelay: 500}, ['build-server-test', 'test-server', 'build-server']);
  gulp.watch('./test/server/**/*.js', {debounceDelay: 500}, ['build-server-test', 'test-server']);
});

gulp.task('test', ['build-server-test','test-server'], () => {
  gulp.watch('./server/**/*.js', {debounceDelay: 500}, ['build-server-test', 'test-server']);
  gulp.watch('./test/server/**/*.js', {debounceDelay: 500}, ['build-server-test', 'test-server']);
});

gulp.task('dev', ['clean-server', 'build-server-test','test-server', 'build-server', 'nodemon'], () => {
  gulp.watch('./server/**/*.js', {debounceDelay: 500}, ['build-server-test', 'test-server', 'build-server']);
  gulp.watch('./test/server/**/*.js', {debounceDelay: 500}, ['build-server-test', 'test-server']);
});
