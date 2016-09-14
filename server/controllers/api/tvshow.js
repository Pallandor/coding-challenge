'use strict';

const config = require('../../routes/config');
const util = require('../../util');


exports.validateShows = (shows, expectedShowObjShape = config.defaultExpectedShowShape) =>


// implement lazy loading? no.
util.validateShows(shows)
  .then(validatedShows => {
      return util.filterShowsByPredicate(); // will use default
  })
  .then(filteredShows => {

  })
  .then(sanitiseShows => {

  });


// has default predicate! also does
exports.filterShowsByPredicate = (shows, predicate = config.defaultTvShowFilterPredicate) => {

}
