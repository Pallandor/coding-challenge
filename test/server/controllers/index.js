'use strict';

const expect = require('chai').expect;
const installTvShowControllerTests = require('./tvshow');

module.exports = () => {
  describe('# Route Controllers', () => {
    before(done => {
      expect(true).to.equal(true);
      done();
    });
    installTvShowControllerTests();
    // Install additional Route tests
  });
};
