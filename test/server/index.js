'use strict';

const installRouteTests = require('./routes');
const installRouteControllerTests = require('./controllers');

describe('Coding Challenge Test Suite', function rootTestSuite() {
  this.timeout(5000);
  installRouteTests();
  installRouteControllerTests();
  // Add additional tests here
});
