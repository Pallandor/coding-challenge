/* eslint-disable */
'use strict';

const gulp = require('gulp');
const webpack = require("webpack");
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config');

gulp.task('build-server', () => {
  return gulp.src('./server/index.js')
    .pipe(webpackStream(webpackConfig))
    .pipe(gulp.dest('build/'));
  });

gulp.task('default', ['build-server']);
