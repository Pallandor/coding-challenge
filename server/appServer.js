'use strict';

const path =  require('path');
const express = require('express');

/** Installs static middleware on app to serve static files
    at /client/*
**/
module.exports = app => {
  const distPath = path.resolve(process.cwd(), 'build/client/');
  const indexFileName = 'index.html';
  app.use(express.static(distPath));
  app.get('/client/*', (req, res) => res.sendFile(path.join(distPath, indexFileName)));
};
// TODO: Test that '/client/* allows for n-depth entries e.g client/whatever/where/will/this/go';
// so always reserves the html. client side handles rerouting when script initialises in browser

// TODO: Replace process.cwd with dirname or relative path, no longer required!
