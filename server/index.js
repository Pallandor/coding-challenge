'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const { reportBadJSON } = require('./customMiddleware');
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
app.use('/', showHandler);

/** Custom Express Error Middleware **/
app.use(reportBadJSON());

/** Serve assets and allow HTML5 mode routing **/
installAppServer(app);

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
