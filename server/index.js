'use strict';

const express = require('express');
const bodyParser = require('body-parser');
// const dotenv = require('dotenv');
const winston = require('winston');
const helmet = require('helmet');

// /** Load environment variables from .env file if dev mode **/
// if (process.env.NODE_ENV === 'development') {
//   dotenv.load({ path: '.env' });
// }

/** Create Express Server **/
const app = express();
const PORT = process.env.PORT || 8080;

/** Server config **/
app.use(bodyParser.json());
app.use(helmet());

// Test up and running!
app.get('/', (req, res, next)=> {
  res.status(200).send(req.body);
  console.log("send something to client!");
});

app.post('/test', (req, res, next)=> {
  res.status(200).send(req.body);
  console.log("send something to client!");
});

/** Start Server **/
app.listen(PORT, (err) => {
  if (err) {
    winston.error(err);
    return;
  }
  winston.info(`Listening on port ${PORT}`);
});

module.exports = app;
