'use strict';

const installRouteTests = require('./routes');
const installRouteControllerTests = require('./controllers');

describe('Coding Challenge Test Suite', () => {
  installRouteTests();
  installRouteControllerTests();
  // Add additional tests here
});
