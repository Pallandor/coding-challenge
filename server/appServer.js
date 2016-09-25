'use strict';

const path =  require('path');
const express = require('express');
/** Installs static middleware to serve static files
    on unhandled client GET requests to root directory.
**/
module.exports = app => {
  const buildPath = path.resolve(__dirname, '..', 'build');
  const indexFileName = 'index.html';
  app.use(express.static(buildPath));
  app.get('*', (req, res) => res.sendFile(path.join(buildPath, indexFileName)));
};
