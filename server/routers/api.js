'use strict';

/** API Router **/

const express = require('express');
const apiRouter = express.Router();

/** Route handlers **/
const tvshowRoutes = require('../routes/tvshow');

/** Install API routes **/
apiRouter.get('/tvshow', tvshowRoutes.getShows);
apiRouter.post('/tvshow/filter', tvshowRoutes.postShowsToFilter);

module.exports = apiRouter;
