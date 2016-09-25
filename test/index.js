'use strict';

const integrationTestSuite = require('./integration/serverSpec');
const unitTestSuite = require('./unit/controllerSpec');

describe('# Server Test Suites ---', () => {
  integrationTestSuite;
  unitTestSuite;
});
