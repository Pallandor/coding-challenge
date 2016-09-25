'use strict';

const app = require('../../server');
const expect = require('chai').expect;
const request = require('supertest');
const mock = require('./mock');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 4000;

describe('# API Integration Test Suite', () => {
  let server = null;

  before(done => {
    server = app.listen(port, done);
  });

  after(done => {
    server.close(done);
  });

  describe('# GET /', () => {
    it('should serve valid Webpack-build HTML asset to client', done => {
      /** NOTE: This test-case has dependency on client HTML and JS assets
                already having been built by Webpack!
      **/
      request(app)
        .get('/')
        .expect('Content-Type', /text\/html/)
        .expect(res => {
          /** Obtain built-asset file paths **/
          const buildPath = path.join(__dirname, '..', '..', 'build');
          const htmlPath = path.join(buildPath, 'index.html');

          /** Synchronously read and store Webpack-built index.html file as utf8 string **/
          const builtHTML = fs.readFileSync(htmlPath).toString('utf8');

          /** Obtain filename of JS asset (compiled dynamically by Webpack build) **/
          const buildDir = fs.readdirSync(buildPath);
          const buildJSFileName = buildDir.filter(fileName => /app.*js$/.test(fileName))[0];

          /** HTML page assertions **/
          expect(builtHTML).to.have.string('<!DOCTYPE html>');
          expect(builtHTML).to.have.string('<link rel="stylesheet" href="https://unpkg.com/tachyons@4.2.1/css/tachyons.min.css">');
          expect(builtHTML).to.have.string('<title>Welcome to RogFlix</title>');
          expect(builtHTML).to.have.string('<div id="root"><div>');
          expect(builtHTML).to.have.string(`<script type="text/javascript" src="/${buildJSFileName}"></script>`);
        })
        .expect(200, done);
    });
  });

  describe('# POST /', () => {
    it('should return JSON of filtered, transformed shows', done => {
      request(app)
        .post('/')
        .send(mock['/'].post.request)
        .expect('Content-Type', /json/)
        .expect(res => {
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('response');
          expect(res.body.response).to.be.an('array');
          expect(res.body).to.deep.equal(mock['/'].post.expectedResponse);
        })
        .expect(200, done);
    });
  });

  describe('# GET /shows', () => {
    it('should return mock JSON object including shows', done => {
      request(app)
        .get('/shows')
        .expect('Content-Type', /json/)
        .expect(res => {
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('payload')
          expect(res.body.payload).to.be.an('array');
          expect(res.body).to.deep.equal(mock['/shows'].get.expectedResponse);
        })
        .expect(200, done);
    });
  });

  /** Add further API integration tests here! **/
});
