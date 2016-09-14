require("source-map-support").install();
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var express = __webpack_require__(1);
	var bodyParser = __webpack_require__(2);
	var dotenv = __webpack_require__(3);
	var winston = __webpack_require__(4);
	var helmet = __webpack_require__(5);
	
	var util = __webpack_require__(6);
	
	/** Load environment variables from .env file if dev mode **/
	if (process.env.NODE_ENV === 'development') {
	  dotenv.load({ path: '.env' });
	}
	
	/** Create Express Server **/
	var app = express();
	var PORT = process.env.PORT || 8080;
	
	/** Server config **/
	app.use(bodyParser.json());
	app.use(helmet());
	
	/** Express Routers **/
	var apiRouter = __webpack_require__(7);
	
	/** Install Express Routers **/
	app.use('/api', apiRouter);
	
	/** Custom Express Error Middleware **/
	app.use(util.reportBadJSON());
	
	/** Start Server **/
	app.listen(PORT, function (err) {
	  if (err) {
	    winston.error(err);
	    return;
	  }
	  winston.info('Listening on port ' + PORT);
	});
	
	module.exports = app;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("dotenv");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("winston");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("helmet");

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	/** Server, middleware and general utils **/
	
	/** Express error middleware creator to parse body-parser error objects and report bad JSON **/
	// eslint-disable-next-line no-unused-vars
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.reportBadJSON = function () {
	  return function (err, req, res, next) {
	    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
	      res.status(400).send({
	        error: 'Could not decode request: JSON parsing failed'
	      });
	    }
	  };
	};
	
	/** Recursive object shape validator by keys **/
	exports.hasDeepEqualKeys = function (obj1, obj2) {
	  if (Array.isArray(obj1)) {
	    if (Array.isArray(obj2)) {
	      if (obj1.length !== obj2.length) {
	        return false;
	      }
	      return obj1.every(function (obj1El, obj1Key) {
	        if ((typeof obj1El === 'undefined' ? 'undefined' : _typeof(obj1El)) === 'object' && obj1El !== null) {
	          if (_typeof(obj2[obj1Key]) === 'object' && obj2[obj1Key] !== null) {
	            return exports.hasDeepEqualKeys(obj1El, obj2[obj1Key]);
	          }
	          return false;
	        }
	        if (_typeof(obj2[obj1Key]) === 'object' && obj2[obj1Key] !== null) {
	          return false; // only here if first is not an object
	        }
	        return true; // arrays hold numeric indices, length is sufficient validation
	      });
	    }
	    return false;
	  }
	  if (Array.isArray(obj2)) {
	    return false; // only here if first is not an array
	  }
	  if ((typeof obj1 === 'undefined' ? 'undefined' : _typeof(obj1)) === 'object' && (typeof obj2 === 'undefined' ? 'undefined' : _typeof(obj2)) === 'object' && obj1 !== null && obj2 !== null) {
	    var obj1Keys = Object.keys(obj1);
	    var obj2Keys = Object.keys(obj2);
	    if (obj1Keys.length !== obj2Keys.length) {
	      return false;
	    }
	    return obj1Keys.every(function (obj1Key) {
	      if (_typeof(obj1[obj1Key]) === 'object' && obj1[obj1Key] !== null) {
	        if (_typeof(obj2[obj1Key]) === 'object' && obj2[obj1Key] !== null) {
	          return exports.hasDeepEqualKeys(obj1[obj1Key], obj2[obj1Key]);
	        }
	        return false;
	      }
	      if (_typeof(obj2[obj1Key]) === 'object' && obj2[obj1Key] !== null) {
	        return false; // only here if first is non-object
	      }
	      return obj2.hasOwnProperty(obj1Key);
	    });
	  }
	  return false;
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/** API Router **/
	
	var express = __webpack_require__(1);
	var apiRouter = express.Router();
	
	/** Route handlers **/
	var tvshowRoutes = __webpack_require__(8);
	
	/** Install API routes **/
	apiRouter.get('/tvshow', tvshowRoutes.getShows);
	apiRouter.post('/tvshow/filter', tvshowRoutes.postShowsToFilter);
	
	module.exports = apiRouter;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var helpers = __webpack_require__(9);
	var showController = __webpack_require__(10);
	
	/** API Route Handlers **/
	
	exports.getShows = function (req, res) {
	  helpers.testResponse(res);
	};
	
	exports.postShowsToFilter = function (req, res) {
	  var shows = req.body.payload;
	  showController.filterShowsByPredicate(shows).then(function (filteredShows) {
	    return showController.sanitiseShows(filteredShows);
	  }) // try as func that takes promise?
	  //.then(sanitiseShows)
	  .then(function (sanitisedShows) {
	    helpers.sendShows(res, sanitisedShows);
	  }).catch(function (err) {
	    return console.log(err);
	  }); // TODO: Modify express error-handler middleware
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	/** Route specific helpers, which are aware of server state e.g. res object.
	    So do NOT cast to promises.
	**/
	
	exports.testResponse = function (res) {
	  return res.status(200).json({ aTestResponse: 'fromTvShowHelpers' });
	};
	
	exports.sendShows = function (res, shows) {
	  res.status(200).json({
	    response: shows
	  });
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Promise = __webpack_require__(11);
	var config = __webpack_require__(12);
	var util = __webpack_require__(6);
	
	// NOTE: Cast synchronous values to promises too, keep contract of controllers resolving to promises
	
	/** Filter TV shows by predicate if given or default predicate from /routes config **/
	exports.filterShowsByPredicate = function (shows) {
	  var predicate = arguments.length <= 1 || arguments[1] === undefined ? config.defaultTvShowFilterPredicate : arguments[1];
	  return Promise.resolve(shows.filter(predicate));
	};
	
	/** Transform show objects to desired shape, will default to shape defined in /routes config **/
	exports.sanitiseShows = function (shows) {
	  var transform = arguments.length <= 1 || arguments[1] === undefined ? config.defaultTvShowSanitiser : arguments[1];
	  return Promise.resolve(shows.map(transform));
	};
	
	// Pointless validator, objects in payload don't conform to a standard shape :(
	// NOTE: Potential use in future API extensions though
	exports.validateShows = function (shows) {
	  var expectedShowObjShape = arguments.length <= 1 || arguments[1] === undefined ? config.defaultExpectedShowShape : arguments[1];
	  return Promise.resolve(util.hasDeepEqualKeys(shows, expectedShowObjShape));
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("bluebird");

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	/** Config for: api/tvshow/filter **/
	
	exports.defaultTvShowFilterPredicate = function (show) {
	  return show.drm && show.episodeCount;
	};
	
	exports.defaultTvShowSanitiser = function (show) {
	  return {
	    image: show.image && show.image.showImage || null,
	    slug: show.slug || null,
	    title: show.title || null
	  };
	};
	
	exports.defaultExpectedShowShape = {};
	// {
	//      "country": "UK",
	//      "description": "What's life like when you have enough children to field your own football team?",
	//      "drm": true,
	//      "episodeCount": 3,
	//      "genre": "Reality",
	//      "image": {
	//          "showImage": "http://mybeautifulcatchupservice.com/img/shows/16KidsandCounting1280.jpg"
	//      },
	//      "language": "English",
	//      "nextEpisode": null,
	//      "primaryColour": "#ff7800",
	//      "seasons": [
	//          {
	//              "slug": "show/16kidsandcounting/season/1"
	//          }
	//      ],
	//      "slug": "show/16kidsandcounting",
	//      "title": "16 Kids and Counting",
	//      "tvChannel": "GEM"
	//  };

/***/ }
/******/ ]);
//# sourceMappingURL=backend.js.map