'use strict';

const util = require('./sdasd');
const showController = require('../../controllers/show');

/** API Route handlers for Shows **/

/** GET handler
    Returns mock JSON response for purposes of fulfilling AJAX
    request with React client.
**/
exports.getShows = (req, res) => {
  util.mockResponse(res);
};

/** POST handler
    Accepts a shows object with shows array defined in the payload property.
    
**/
exports.postShowsToFilter = (req, res) => {
  const shows = req.body.payload;
  showController
    .filterShowsByPredicate(shows)
    .then(showController.sanitiseShows)
    .then(sanitisedShows => {
      util.sendShows(res, sanitisedShows);
    })
    .catch(err => console.log(err));
};
// TODO: Add proper Express error handler (end of middleware chains).
