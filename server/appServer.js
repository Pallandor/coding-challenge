'use strict';

const path =  require('path');
const express = require('express');

module.exports = app => {
  const distPath = path.resolve(process.cwd(), 'build/client/');
  const indexFileName = 'index.html';
  app.use(express.static(distPath));
  app.get('*', (req, res) => res.sendFile(path.join(distPath, indexFileName)));
};
