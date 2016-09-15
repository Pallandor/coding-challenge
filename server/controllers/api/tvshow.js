const Promise = require('bluebird');
const config = require('../../routes/config');
const util = require('../../util');

// NOTE: Cast synchronous values to promises too, enforce contract of controllers resolving to promises

exports.filterShowsByPredicate = (shows, predicate = config.defaultTvShowFilterPredicate) =>
  Promise.resolve(shows.filter(predicate));

exports.sanitiseShows = (shows, transform = config.defaultTvShowSanitiser) =>
  Promise.resolve(shows.map(transform));

exports.validateShows = (shows, expectedShowObjShape = config.defaultExpectedShowShape) =>
  Promise.resolve(util.hasDeepEqualKeys(shows, expectedShowObjShape));
