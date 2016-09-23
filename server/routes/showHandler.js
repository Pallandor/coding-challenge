'use strict';

const util = require('./util');
const showController = require('../controllers/show');

/** API Route handlers for Shows **/

/** GET handler
    Returns mock JSON response for purposes of fulfilling AJAX
    request for React client.
**/
exports.getShows = (req, res) => {
  util.mockResponse(res);
};

/** POST handler
    Accepts a shows object with shows array defined in the payload property.
    (See example in ./util/mock.js).
    Applies a filter to the array of shows and
**/
exports.filterShows = (req, res) => {
  const shows = req.body.payload;
  showController
    .filterShowsDefault(shows)
    .then(showController.transformShowsDefault)
    .then(transformedShows => util.sendShows(res, transformedShows))
    .catch(err => util.sendError(res, err));
};
