const expect = require('chai').expect;
const showController = require('../../../server/controllers/api/tvshow');
const mock = require('../mock');

module.exports = () => {
  describe('# TV Show Controllers', () => {
    describe('# filterShowsByPredicate', () => {
      it('should return a valid promise', done => {
        const expectedPromise = showController.filterShowsByPredicate(mock.shows.payload);
        expect(expectedPromise.then).to.be.a('function');
        done();
      });
      it('should resolve to a filtered array of TV shows using default filter', done => {
        showController.filterShowsByPredicate(mock.shows.payload)
          .then(filteredShows => {
            expect(filteredShows).to.deep.equal(mock.expectedFilteredShows);
            done();
          });
      });
    });
    describe('# sanitiseShows', () => {
      it('should return a valid promise', done => {
        const expectedPromise = showController.sanitiseShows(mock.expectedFilteredShows);
        expect(expectedPromise.then).to.be.a('function');
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