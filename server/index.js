'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const customWare = require('./customMiddleware');
const installAppServer = require('./appServer');

/** Load environment variables from .env file if dev mode **/
if (process.env.NODE_ENV === 'development') {
  dotenv.load({ path: '.env' });
}

/** Create Express Server **/
const app = express();
const PORT = process.env.PORT || 8080;

/** Server config **/
app.use(bodyParser.json());
app.use(cors());

/** Express Route Handlers **/
const showHandler = require('./routes/showHandler');

/** Install Route Handlers **/
app.post('/', showHandler.filterShows);
app.get('/shows', showHandler.getShows);

/** Custom Express Error Middleware **/
app.use(customWare.reportBadJSON());

/** Serve assets and allow HTML5 mode routing **/
// installAppServer(app);

const buildPath = path.join(__dirname, '..', 'build');
const indexFileName = 'index.html';
app.use(express.static(buildPath));
app.get('*', (req, res) => res.sendFile(path.join(buildPath, indexFileName)));

/** Start Server **/
if (!module.parent) {
  app.listen(PORT, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Listening on port ${PORT}`);
  });
}

module.exports = app;
