'use strict';

const Promise = require('bluebird');
const config = require('./config');

/** Show Controllers
    - Decoupled from knowledge of Server/API service
    - Define default values/behaviours from Controllers config
    - Enforce contract of Controllers always returning Promises
 **/

/** Accepts a shows array, filters the array using a default predicate/test
    function and returns a Promise that resolves with the filtered shows array.
    Propogates error message up the Promise-chain if 'shows' is not an array.
**/
exports.filterShowsDefault = shows =>
  new Promise((resolve, reject) => {
    if (!Array.isArray(shows)) reject(config.showsNotArrayError);
    resolve(shows.filter(config.defaultShowFilterPredicate));
  });

/** Accepts a shows array, transforms the array using a default show object
    transformer function and returns a Promise that resolves with the array
    of transformed shows. Propogates error if 'shows' is not an array.
**/
 exports.transformShowsDefault = shows =>
  new Promise((resolve, reject) => {
    if (!Array.isArray(shows)) reject(config.showsNotArrayError);
    resolve(shows.map(config.defaultShowTransform));
  });
