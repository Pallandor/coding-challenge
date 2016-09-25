const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../../server').listen();

module.exports = () => {
  describe('# TV Show Routes', () => {
    describe('# GET /api/tvshow', () => {
      it('should return 200 OK', done => {
        request(app)
          .get('/api/tvshow')
          .expect(200)
          .end(done);
      });
      // it('should should return a JSON result', done => {
      //   request(app)
      //     .get('/api/tvshow')
      //     .expect('Content-Type', /application\/json/)  // cann i add done to here?
      //     .end(done);
      // });
    });
    describe('# POST /api/tvshow/filter', () => {
      it('should accept X value', done => {
        expect(true).to.equal(true);
        done();
      });
      it('should return Y value with HTTP response Z', done => {
        expect(true).to.equal(true);
        done();
      });
    });
  });
};
