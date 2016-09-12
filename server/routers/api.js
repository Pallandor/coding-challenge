'use strict';

/** API Router **/

const express = require('express');
const apiRouter = express.Router();

/** Route handlers **/
const testRoutes = require('../routes/test');

/** Install API routes **/
apiRouter.post('/test', testRoutes.postTest);
apiRouter.get('/', testRoutes.getTest);

module.exports = apiRouter;
