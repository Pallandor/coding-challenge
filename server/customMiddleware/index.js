'use strict';

/** Custom Express Middleware **/

/** Middleware creator which parses body-parser type objects
    for errors and reports bad JSON.
**/
//  eslint-disable-next-line no-unused-vars
exports.reportBadJSON = () => (err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    res.status(400).send({
      error: 'Could not decode request: JSON parsing failed',
    });
  }
};
