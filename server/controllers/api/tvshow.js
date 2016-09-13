'use strict';

const config = require('../../routes/config');

const hasEqualKeys = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1);
	const obj2Keys = Object.keys(obj2);
  if (obj1Keys.length !== obj2Keys.length) return false;
  return obj1Keys.every(obj1Key => {
    if (typeof obj1[obj1Key] === 'object' && typeof obj2[obj1Key] === 'object' && obj1[obj1Key] !== null && obj2[obj1Key] !== null) {
      return hasEqualKeys(obj1[obj1Key], obj2[obj1Key]);
    }
    return obj2.hasOwnProperty(obj1Key);
  });
};

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
