## Technical Test (Nine Entertainment Co/Digital) - Node.js Challenge

**The Good Stuff** :dolphin: :tropical_fish: :penguin:  
Node/Express server on the back-end, hosting API (POST) service at:
`https://love-your-tech-stack.herokuapp.com/` and mock (GET) service at:
`https://love-your-tech-stack.herokuapp.com/shows`.

React/Redux client on front-end which consumes API (mock) service at '/shows', for
viewing in browser/mobile at: `https://love-your-tech-stack.herokuapp.com/`. React-router
for lovely SEO friendly slugs.

Also fixed to allow for bookmarking (will serve asset
and because route renders nested ShowPage Component inside HomePage container, state
hydrated even when starting at nested route on client!) :heart_eyes_cat:

[![Build Status](https://travis-ci.org/Pallandor/coding-challenge.svg?branch=master)](https://travis-ci.org/Pallandor/coding-challenge)

## Installing Dependencies & Generating Build (Production)
```bash
npm install
```
NPM ```postinstall``` hook will take care of running build process. NPM scripts
hooked up to Gulp task runner to automate production build process.

## Starting Server (Production)
```bash
npm start
```

### Tests
```bash
npm test
```
__NOTE:__ Production build runs through Travis CI/Heroku pipeline, triggering
NPM test script and Gulp tasks for ESlint-based linting and separate Server
integration and Unit Test Suites (with Mocha/Chai/Supertest).

## Development
```bash
npm run dev
```
Runs tests and development builds, client accessible at `http://localhost:8080`.
Nodemon and Gulp-watching for a nicer dev environment.
