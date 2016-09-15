// eslint-disable-next-line
'use strict'

const del = require('del');
const gulp = require('gulp');
const wait = require('gulp-wait');
const mocha = require('gulp-mocha');
const plumber = require('gulp-plumber');
const nodemon = require('gulp-nodemon');
const eslint = require('gulp-eslint');
const webpackStream = require('webpack-stream');
const webpackClientConfig = require('./webpack/webpackClient.config');
const webpackServerConfig = require('./webpack/webpackServer.config');
const webpackTestConfig = require('./webpack/webpackTest.config');

gulp.task('clean-server', () => {
  return del([
    'build/server/**/*',
  ]);
});

gulp.task('clean-client', () => {
  return del([
    'build/client/**/*',
  ]);
});

gulp.task('build-server', () => {
  return gulp.src('./server/index.js')
    .pipe(webpackStream(webpackServerConfig))
    .pipe(gulp.dest('build/server/'));
});

gulp.task('build-client', ['clean-client'], () => {
  return gulp.src('./client/index.js')
    .pipe(webpackStream(webpackClientConfig))
    .pipe(gulp.dest('build/client/'));
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

gulp.task('test', ['lint', 'build-server-test', 'test-server']);
gulp.task('client', ['clean-client', 'build-client']);
gulp.task('server', ['clean-server', 'test', 'build-server']);

gulp.task('default', ['client', 'server']);

gulp.task('dev:test', ['lint', 'build-server-test', 'test-server'], () => {
  gulp.watch('./server/**/*.js', {debounceDelay: 500}, ['build-server-test', 'test-server']);
  gulp.watch('./test/server/**/*.js', {debounceDelay: 500}, ['build-server-test', 'test-server']);
});

gulp.task('dev', ['test', 'client', 'server', 'nodemon'], () => {
  gulp.watch('./server/**/*.js', {debounceDelay: 500}, ['build-server-test', 'test-server', 'build-server']);
  gulp.watch('./test/server/**/*.js', {debounceDelay: 500}, ['build-server-test', 'test-server']);
});
