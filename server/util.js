'use strict';

/** Constructor for Custom Error, to bypass Bluebird non-error warnings
    and preserve stack trace.
    See: http://bluebirdjs.com/docs/api/catch.html
 **/
function MyCustomError(message) {
  this.message = message;
  this.name = 'CustomError';
  Error.captureStackTrace(this, MyCustomError);
}
MyCustomError.prototype = Object.create(Error.prototype);
MyCustomError.prototype.constructor = MyCustomError;

exports.CustomError = MyCustomError;
