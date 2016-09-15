/** Server, middleware and general utils **/

/** Express error middleware creator to parse body-parser error objects and report bad JSON **/
// eslint-disable-next-line no-unused-vars
exports.reportBadJSON = () => (err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    res.status(400).send({
      error: 'Could not decode request: JSON parsing failed',
    });
  }
};

/** Recursive object shape validator by keys **/
exports.hasDeepEqualKeys = (obj1, obj2) => {
  if (Array.isArray(obj1)) {
    if (Array.isArray(obj2)) {
      if (obj1.length !== obj2.length) {
        return false;
      }
      return obj1.every((obj1El, obj1Key) => {
        if (typeof obj1El === 'object' && obj1El !== null) {
          if (typeof obj2[obj1Key] === 'object' && obj2[obj1Key] !== null) {
            return exports.hasDeepEqualKeys(obj1El, obj2[obj1Key]);
          }
          return false;
        }
        if (typeof obj2[obj1Key] === 'object' && obj2[obj1Key] !== null) {
          return false; // only here if first is not an object
        }
        return true; // arrays hold numeric indices, length is sufficient validation
      });
    }
    return false;
  }
  if (Array.isArray(obj2)) {
    return false; // only here if first is not an array
  }
  if (typeof obj1 === 'object' && typeof obj2 === 'object' && obj1 !== null && obj2 !== null) {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
    if (obj1Keys.length !== obj2Keys.length) {
      return false;
    }
    return obj1Keys.every(obj1Key => {
      if (typeof obj1[obj1Key] === 'object' && obj1[obj1Key] !== null) {
        if (typeof obj2[obj1Key] === 'object' && obj2[obj1Key] !== null) {
          return exports.hasDeepEqualKeys(obj1[obj1Key], obj2[obj1Key]);
        }
        return false;
      }
      if (typeof obj2[obj1Key] === 'object' && obj2[obj1Key] !== null) {
        return false; // only here if first is non-object
      }
      return obj2.hasOwnProperty(obj1Key);
    });
  }
  return false;
};
