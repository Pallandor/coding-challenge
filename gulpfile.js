'use strict';

const del = require('del');
const gulp = require('gulp');
const wait = require('gulp-wait');
const mocha = require('gulp-mocha');
const plumber = require('gulp-plumber');
const nodemon = require('gulp-nodemon');
const eslint = require('gulp-eslint');
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

gulp.task('lint', () => {
  return gulp.src(['**/*.js', '!node_modules/**', '!build/**', '!build-test/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('test-server', ['build-server-test'], done => {
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


gulp.task('nodemon', ['build-server'], cb => {
  let started = false;
  return nodemon({
    script: './build/server',
    watch: ['./build'],
    ext: 'js',
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

gulp.task('default', ['lint', 'clean-server', 'build-server-test', 'test-server', 'build-server'], () => {
  gulp.watch('./server/**/*.js', {debounceDelay: 500}, ['build-server-test', 'test-server', 'build-server']);
  gulp.watch('./test/server/**/*.js', {debounceDelay: 500}, ['build-server-test', 'test-server']);
});

gulp.task('test', ['lint', 'build-server-test', 'test-server']);

gulp.task('dev:test', ['lint', 'build-server-test', 'test-server'], () => {
  gulp.watch('./server/**/*.js', {debounceDelay: 500}, ['build-server-test', 'test-server']);
  gulp.watch('./test/server/**/*.js', {debounceDelay: 500}, ['build-server-test', 'test-server']);
});

gulp.task('dev', ['lint', 'clean-server', 'build-server-test', 'test-server', 'build-server', 'nodemon'], () => {
  gulp.watch('./server/**/*.js', {debounceDelay: 500}, ['build-server-test', 'test-server', 'build-server']);
  gulp.watch('./test/server/**/*.js', {debounceDelay: 500}, ['build-server-test', 'test-server']);
});
