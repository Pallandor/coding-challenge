# coding-challenge
**Technical Test (Nine Entertainment Co/Digital)** Node.js coding challenge
Node/Express server on the back-end, hosting API service at:
`https://love-your-tech-stack.herokuapp.com/api/tvshow/filter`
React/Redux client on front-end which consumes separate API service (in mock), for
viewing at: `https://love-your-tech-stack.herokuapp.com/`. React-router for lovely
SEO friendly slugs. Also fixed to allow for bookmarking (will serve asset and because
route renders nested ShowPage Component inside HomePage container, state hydrated even
when starting at nested route on client!).

[![Build Status](https://travis-ci.org/Pallandor/coding-challenge.svg?branch=master)](https://travis-ci.org/Pallandor/coding-challenge)

## Installation (Production Client & Server)
```bash
npm install
npm start
```

### Tests
```bash
npm run test
```
Production build runs through Travis CI/Heroku pipeline, runs npm test script
to trigger Gulp for linting and Mocha/Chai test suites.
