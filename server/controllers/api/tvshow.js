'use strict';

const Promise = require('bluebird');
const config = require('../../routes/config');
const util = require('../../util');

// NOTE: Cast synchronous values to promises too, keep contract of controllers resolving to promises

/** Filter TV shows by predicate if given or default predicate from /routes config **/
exports.filterShowsByPredicate = (shows, predicate = config.defaultTvShowFilterPredicate) =>
  Promise.resolve(shows.filter(predicate));

/** Transform show objects to desired shape, will default to shape defined in /routes config **/
exports.sanitiseShows = (shows, transform = config.defaultTvShowSanitiser) =>
  Promise.resolve(shows.map(transform));

// Pointless validator, objects in payload don't conform to a standard shape :(
// NOTE: Potential use in future API extensions though
exports.validateShows = (shows, expectedShowObjShape = config.defaultExpectedShowShape) =>
  Promise.resolve(util.hasDeepEqualKeys(shows, expectedShowObjShape));
