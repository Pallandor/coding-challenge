'use strict';

const expect = require('chai').expect;
const installTvShowRouteTests = require('./tvshow');

module.exports = () => {
  describe('Route Handlers', () => {
    before(done => {
      expect(true).to.equal(true);
      done();
    });
    installTvShowRouteTests();
    // Install additional Route tests
  });
};
