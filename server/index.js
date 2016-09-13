'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const winston = require('winston');
const helmet = require('helmet');

const util = require('./util');

/** Load environment variables from .env file if dev mode **/
if (process.env.NODE_ENV === 'development') {
  dotenv.load({ path: '.env' });
}

/** Create Express Server **/
const app = express();
const PORT = process.env.PORT || 8080;

/** Server config **/
app.use(bodyParser.json());
app.use(helmet());

/** Express Routers **/
const apiRouter = require('./routers/api');

/** Install Express Routers **/
app.use('/api', apiRouter);

/** Express Error Middleware **/
app.use(util.reportBadJSON());

/** Start Server **/
app.listen(PORT, (err) => {
  if (err) {
    winston.error(err);
    return;
  }
  winston.info(`Listening on port ${PORT}`);
});

module.exports = app;
