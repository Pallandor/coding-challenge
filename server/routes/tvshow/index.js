'use strict';

const helpers = require('./helpers');
const showController = require('../controllers/api/tvshow');

/** API Route Handlers **/

exports.getShows = (req, res) => {
  helpers.testResponse(res);
};

exports.postShowsToFilter = (req, res) => {
  const shows = req.body.payload;
  showController
    .filterShowsByPredicate(shows)
    // .then(filteredShows => sanitiseShows(filteredShows)) // try as func that takes promise?
    .then(sanitiseShows)
    .then(sanitisedShows => {
      helpers.sendShows(res, sanitisedShows);
    })
    .catch(err => console.log(err)); // TODO: Modify express error-handler middleware
};
