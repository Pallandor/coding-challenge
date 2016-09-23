'use strict';

const Promise = require('bluebird');
const config = require('./config');

/** Show Controllers
    - Decoupled from knowledge of Server/API service
    - Define default values/behaviours from Controllers config
    - Enforce contract of Controllers always returning promises
 **/

/** Filters shows using a given predicate/test function, otherwise
    reverts to a default test if none provided
**/
 exports.filterShows = (shows, predicate) => {
   const filterPredicate = predicate || config.defaultShowFilterPredicate;
   return Promise.resolve(shows.filter())
 };

/** Transforms shows according to a provided Show object transformer
    function, otherwise reverts to default transformer if none provided.
**/
 exports.transformShows = (shows, transform) => {
   const showTransform = transform || config.defaultShowTransform;
   return Promise.resolve(shows.map(showTransform));
 };
