'use strict';

const mockJSON = require('./mock');

/** Provides a pre-prepared mock JSON response **/
exports.mockResponse = res => res.status(200).json(mockJSON);

/** Helper to standarise JSON response shape across
    Controllers/Routes
**/
exports.sendShows = (res, shows) =>
  res.status(200).json({
    response: shows,
  });

exports.defineFilter = possibleFilter =>
  typeof possibleFilter === 'function' ? possibleFilter : null;
