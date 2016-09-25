'use strict';

const expect = require('chai').expect;
const mock = require('./mock');
const showController = require('../../server/controllers/show');
const showControllerConfig = require('../../server/controllers/config');

describe('# Controllers Unit Test Suite', () => {
  describe('# Controllers - Show', () => {
    describe('# filterShowsDefault', () => {
      it('should be a function', done => {
        expect(showController.filterShowsDefault).to.be.a('function');
        done();
      });

      it('should accept an array of shows and return a valid promise', done => {
        const mockInput = mock.controllers.show.input;
        const expectedPromise = showController.filterShowsDefault(mockInput);

        /** Test whether it is a thenable. (Per Promises/A+ spec) **/
        expect(expectedPromise).to.have.property('then');
        expect(expectedPromise.then).to.be.a('function');
        done();
      });

      it('should resolve to a filtered array of shows using a predefined predicate', () => {
        const mockInput = mock.controllers.show.input;
        const expectedPromise = showController.filterShowsDefault(mockInput);
        /** Recreate the filtered array using the same operation and
            same default predicate/test function.
        **/
        const expectedFilteredShows = mockInput.filter(showControllerConfig.defaultShowFilterPredicate);

        /** Use Mocha's built-in support for promises to simply return the
            promise for test, without passing a 'done' callback.
        **/
        return expectedPromise.then(filteredShows => {
          expect(filteredShows).to.deep.equal(expectedFilteredShows);
        });
      });

      it('should return a rejected Promise object if shows is not an array', () => {
        const mockBadInput = mock.controllers.show.badInput;
        const expectedRejectedPromise = showController.filterShowsDefault(mockBadInput);

        /** We expect it to return the standard showsNotArrayError message as
            defined in the Show Controller's config file.
        **/
        return expectedRejectedPromise.catch(err => {
          expect(err).to.equal(showControllerConfig.showsNotArrayError);
          return err;
        });
      });
    });

    describe('# transformShowsDefault', () => {
      it('should be a function', done => {
        expect(showController.transformShowsDefault).to.be.a('function');
        done();
      });

      it('should accept an array of shows and return a valid promise', done => {
        /** We can use the same mock input as above, because as a decoupled
            Controller method, it simply needs an array of shows, filtered
            or otherwise.
        **/
        const mockInput = mock.controllers.show.input;
        const expectedPromise = showController.transformShowsDefault(mockInput);

        /** Test whether it is a thenable (per Promises/A+ spec) **/
        expect(expectedPromise).to.have.property('then');
        expect(expectedPromise.then).to.be.a('function');
        done();
      });

      it('should resolve to an array of transformed show objects using a predefined transform', () => {
        const mockInput = mock.controllers.show.input;
        const expectedPromise = showController.transformShowsDefault(mockInput);
        const expectedTransformedShows = mockInput.map(showControllerConfig.defaultShowTransform);

        return expectedPromise.then(transformedShows => {
          expect(transformedShows).to.deep.equal(expectedTransformedShows);
          return transformedShows;
        });
      });

      it('should return a rejected Promise object if shows is not an array', () => {
        const mockBadInput = mock.controllers.show.badInput;
        const expectedRejectedPromise = showController.transformShowsDefault(mockBadInput);

        return expectedRejectedPromise.catch(err => {
          expect(err).to.equal(showControllerConfig.showsNotArrayError);
          return err;
        });
      });
    });
  });
  /** Add additional Controller test-suites here! **/
});
