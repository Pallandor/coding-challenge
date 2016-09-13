'use strict';

/** Server and middleware utils **/

/** Generates express middleware to parse body-parser generated
    error objects and report bad JSON :)
**/
exports.reportBadJSON = () => (err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    res.status(400).send({
      error: 'Could not decode request: JSON parsing failed',
    });
  }
};
