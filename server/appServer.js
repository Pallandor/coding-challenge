'use strict';

const path =  require('path');
const express = require('express');

/** Installs static middleware to serve static files
    on unhandled client GET requests to root dir
**/
module.exports = app => {
  const buildPath = path.join(__dirname, '..', 'build');
  const indexFileName = 'index.html';
  app.use(express.static(buildPath));
  app.get('*', (req, res) => res.sendFile(path.resolve(buildPath, indexFileName)));
};
// NOTE: Ensure client-side routing can still handle nested route initialisation
