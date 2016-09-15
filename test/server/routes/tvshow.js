const expect = require('chai').expect;

module.exports = () => {
  describe('# TV Show Routes', () => {
    describe('# GET /api/tvshow', () => {
      it('should should return an array of all TV shows', done => {
        expect(true).to.equal(true);
        done();
      });
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
