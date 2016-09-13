'use strict';

/** Server and middleware utils **/

/** Express error middleware creator to parse body-parser error objects and report bad JSON **/
// eslint-disable-next-line no-unused-vars
exports.reportBadJSON = () => (err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    res.status(400).send({
      error: 'Could not decode request: JSON parsing failed',
    });
  }
};
