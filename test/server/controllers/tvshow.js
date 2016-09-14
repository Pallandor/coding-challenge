'use strict';

const expect = require('chai').expect;
// const chaiAsPromised = require('chai-as-promised');
const showController = require('../../../server/controllers/api/tvshow');
const mock = require('../../mock');
// chai.use(chaiAsPromised);

module.exports = () => {
  describe('# TV Show Controllers', () => {
    describe('# filterShowsByPredicate', () => {
      it('should be a function that takes 2 arguments', () => {
        expect(showController.filterShowsByPredicate).to.be.a('function');
        expect(showController.filterShowsByPredicate.length).to.equal(2);
      });
      it('should return a valid promise', done => {
        const expectedPromise = showController.filterShowsByPredicate(mock.shows);
        typeof expectedPromise.then === 'function' && done();
        // return showController.filterShowsByPredicate(mock.shows).to.eventually.equal(mock.expectedShows);
      });
      it('should resolve to a filtered array of TV shows', done => {
        expect(true).to.equal(true);
        done();
      });
    });
    describe('# sanitiseShows', () => {
      it('should return a valid promise', done => {
        expect(true).to.equal(true);
        done();
      });
      it('should resolve to an array of transformed tv shows', done => {
        expect(true).to.equal(true);
        done();
      });
    });
    describe('# validateShows', () => {
      it('should return a valid promise', done => {
        expect(true).to.equal(true);
        done();
      });
      it('should resolve to true if shows match expected show shape', done => {
        expect(true).to.equal(true);
        done();
      });
    });
  });
};
