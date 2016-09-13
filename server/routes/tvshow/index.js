'use strict';

const config = require('../config');
const helpers = require('./helpers');

/** API Route Handlers **/

exports.getShows = (req, res) => {
  helpers.testResponse(res);
};

exports.postShowsToFilter = (req, res) => {
  const shows = req.body.payload;
  const filteredShows = shows.filter(config.defaultTvShowFilterPredicate);
  helpers.sendShows(res, helpers.sanitiseShows(filteredShows));
};
