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
	
	var installRouteTests = __webpack_require__(1);
	var installRouteControllerTests = __webpack_require__(4);
	
	describe('Coding Challenge Test Suite', function () {
	  installRouteTests();
	  installRouteControllerTests();
	  // Add additional tests here
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var expect = __webpack_require__(2).expect;
	var installTvShowRouteTests = __webpack_require__(3);
	
	module.exports = function () {
	  describe('# API Route Handlers', function () {
	    before(function (done) {
	      expect(true).to.equal(true);
	      done();
	    });
	    installTvShowRouteTests();
	    // Install additional Route tests
	  });
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("chai");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var expect = __webpack_require__(2).expect;
	
	module.exports = function () {
	  describe('# TV Show Routes', function () {
	    describe('# GET /api/tvshow', function () {
	      it('should should return an array of all TV shows', function (done) {
	        expect(true).to.equal(true);
	        done();
	      });
	    });
	    describe('# POST /api/tvshow/filter', function () {
	      it('should accept X value', function (done) {
	        expect(true).to.equal(true);
	        done();
	      });
	      it('should return Y value with HTTP response Z', function (done) {
	        expect(true).to.equal(true);
	        done();
	      });
	    });
	  });
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var expect = __webpack_require__(2).expect;
	var installTvShowControllerTests = __webpack_require__(5);
	
	module.exports = function () {
	  describe('# Route Controllers', function () {
	    before(function (done) {
	      expect(true).to.equal(true);
	      done();
	    });
	    installTvShowControllerTests();
	    // Install additional Route tests
	  });
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var expect = __webpack_require__(2).expect;
	var showController = __webpack_require__(6);
	var mock = __webpack_require__(10);
	
	module.exports = function () {
	  describe('# TV Show Controllers', function () {
	    describe('# filterShowsByPredicate', function () {
	      it('should return a valid promise', function (done) {
	        var expectedPromise = showController.filterShowsByPredicate(mock.shows.payload);
	        expect(expectedPromise.then).to.be.a('function');
	        done();
	      });
	      it('should resolve to a filtered array of TV shows', function (done) {
	        expect(true).to.equal(true);
	        expect(true).to.equal(true);
	        done();
	      });
	    });
	    describe('# sanitiseShows', function () {
	      it('should return a valid promise', function (done) {
	        expect(true).to.equal(true);
	        done();
	      });
	      it('should resolve to an array of transformed tv shows', function (done) {
	        expect(true).to.equal(true);
	        done();
	      });
	    });
	    describe('# validateShows', function () {
	      it('should return a valid promise', function (done) {
	        expect(true).to.equal(true);
	        done();
	      });
	      it('should resolve to true if shows match expected show shape', function (done) {
	        expect(true).to.equal(true);
	        done();
	      });
	    });
	  });
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Promise = __webpack_require__(7);
	var config = __webpack_require__(8);
	var util = __webpack_require__(9);
	
	// NOTE: Cast synchronous values to promises too, enforce contract of controllers resolving to promises
	
	exports.filterShowsByPredicate = function (shows) {
	  var predicate = arguments.length <= 1 || arguments[1] === undefined ? config.defaultTvShowFilterPredicate : arguments[1];
	  return Promise.resolve(shows.filter(predicate));
	};
	
	exports.sanitiseShows = function (shows) {
	  var transform = arguments.length <= 1 || arguments[1] === undefined ? config.defaultTvShowSanitiser : arguments[1];
	  return Promise.resolve(shows.map(transform));
	};
	
	exports.validateShows = function (shows) {
	  var expectedShowObjShape = arguments.length <= 1 || arguments[1] === undefined ? config.defaultExpectedShowShape : arguments[1];
	  return Promise.resolve(util.hasDeepEqualKeys(shows, expectedShowObjShape));
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("bluebird");

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	/** Config for: api/tvshow/filter **/
	
	// Default predicate, returns shows with a drm set true and episodeCount > 0
	
	exports.defaultTvShowFilterPredicate = function (show) {
	  return show.drm && show.episodeCount;
	};
	
	// Default shape when cleaning tv show object for route response
	exports.defaultTvShowSanitiser = function (show) {
	  return {
	    image: show.image && show.image.showImage || null,
	    slug: show.slug || null,
	    title: show.title || null
	  };
	};
	
	exports.defaultExpectedShowShape = {};

/***/ },
/* 9 */
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
/* 10 */
/***/ function(module, exports) {

	/* eslint-disable */
	'use strict';
	
	exports.shows = {
	    "payload": [{
	        "country": "UK",
	        "description": "What's life like when you have enough children to field your own football team?",
	        "drm": true,
	        "episodeCount": 3,
	        "genre": "Reality",
	        "image": {
	            "showImage": "http://mybeautifulcatchupservice.com/img/shows/16KidsandCounting1280.jpg"
	        },
	        "language": "English",
	        "nextEpisode": null,
	        "primaryColour": "#ff7800",
	        "seasons": [{
	            "slug": "show/16kidsandcounting/season/1"
	        }],
	        "slug": "show/16kidsandcounting",
	        "title": "16 Kids and Counting",
	        "tvChannel": "GEM"
	    }, {
	        "slug": "show/seapatrol",
	        "title": "Sea Patrol",
	        "tvChannel": "Channel 9"
	    }, {
	        "country": " USA",
	        "description": "The Taste puts 16 culinary competitors in the kitchen, where four of the World's most notable culinary masters of the food world judges their creations based on a blind taste. Join judges Anthony Bourdain, Nigella Lawson, Ludovic Lefebvre and Brian Malarkey in this pressure-packed contest where a single spoonful can catapult a contender to the top or send them packing.",
	        "drm": true,
	        "episodeCount": 2,
	        "genre": "Reality",
	        "image": {
	            "showImage": "http://mybeautifulcatchupservice.com/img/shows/TheTaste1280.jpg"
	        },
	        "language": "English",
	        "nextEpisode": {
	            "channel": null,
	            "channelLogo": "http://mybeautifulcatchupservice.com/img/player/logo_go.gif",
	            "date": null,
	            "html": "<br><span class=\"visit\">Visit the Official Website</span></span>",
	            "url": "http://go.ninemsn.com.au/"
	        },
	        "primaryColour": "#df0000",
	        "seasons": [{
	            "slug": "show/thetaste/season/1"
	        }],
	        "slug": "show/thetaste",
	        "title": "The Taste",
	        "tvChannel": "GEM"
	    }, {
	        "country": "UK",
	        "description": "The series follows the adventures of International Rescue, an organisation created to help those in grave danger using technically advanced equipment and machinery. The series focuses on the head of the organisation, ex-astronaut Jeff Tracy, and his five sons who piloted the \"Thunderbird\" machines.",
	        "drm": true,
	        "episodeCount": 24,
	        "genre": "Action",
	        "image": {
	            "showImage": "http://mybeautifulcatchupservice.com/img/shows/Thunderbirds_1280.jpg"
	        },
	        "language": "English",
	        "nextEpisode": null,
	        "primaryColour": "#0084da",
	        "seasons": [{
	            "slug": "show/thunderbirds/season/1"
	        }, {
	            "slug": "show/thunderbirds/season/3"
	        }, {
	            "slug": "show/thunderbirds/season/4"
	        }, {
	            "slug": "show/thunderbirds/season/5"
	        }, {
	            "slug": "show/thunderbirds/season/6"
	        }, {
	            "slug": "show/thunderbirds/season/8"
	        }],
	        "slug": "show/thunderbirds",
	        "title": "Thunderbirds",
	        "tvChannel": "Channel 9"
	    }, {
	        "country": "USA",
	        "description": "A sleepy little village, Crystal Cove boasts a long history of ghost sightings, poltergeists, demon possessions, phantoms and other paranormal occurrences. The renowned sleuthing team of Fred, Daphne, Velma, Shaggy and Scooby-Doo prove all of this simply isn't real, and along the way, uncover a larger, season-long mystery that will change everything.",
	        "drm": true,
	        "episodeCount": 4,
	        "genre": "Kids",
	        "image": {
	            "showImage": "http://mybeautifulcatchupservice.com/img/shows/ScoobyDoo1280.jpg"
	        },
	        "language": "English",
	        "nextEpisode": null,
	        "primaryColour": "#1b9e00",
	        "seasons": [{
	            "slug": "show/scoobydoomysteryincorporated/season/1"
	        }],
	        "slug": "show/scoobydoomysteryincorporated",
	        "title": "Scooby-Doo! Mystery Incorporated",
	        "tvChannel": "GO!"
	    }, {
	        "country": "USA",
	        "description": "Toy Hunter follows toy and collectibles expert and dealer Jordan Hembrough as he scours the U.S. for hidden treasures to sell to buyers around the world. In each episode, he travels from city to city, strategically manoeuvring around reluctant sellers, abating budgets, and avoiding unforeseen roadblocks.",
	        "drm": true,
	        "episodeCount": 2,
	        "genre": "Reality",
	        "image": {
	            "showImage": "http://mybeautifulcatchupservice.com/img/shows/ToyHunter1280.jpg"
	        },
	        "language": "English",
	        "nextEpisode": null,
	        "primaryColour": "#0084da",
	        "seasons": [{
	            "slug": "show/toyhunter/season/1"
	        }],
	        "slug": "show/toyhunter",
	        "title": "Toy Hunter",
	        "tvChannel": "GO!"
	    }, {
	        "country": "AUS",
	        "description": "A series of documentary specials featuring some of the world's most frightening moments, greatest daredevils and craziest weddings.",
	        "drm": true,
	        "episodeCount": 1,
	        "genre": "Documentary",
	        "image": {
	            "showImage": "http://mybeautifulcatchupservice.com/img/shows/Worlds1280.jpg"
	        },
	        "language": "English",
	        "nextEpisode": null,
	        "primaryColour": "#ff7800",
	        "seasons": [{
	            "slug": "show/worlds/season/1"
	        }],
	        "slug": "show/worlds",
	        "title": "World's...",
	        "tvChannel": "Channel 9"
	    }, {
	        "country": "USA",
	        "description": "Another year of bachelorhood brought many new adventures for roommates Walden Schmidt and Alan Harper. After his girlfriend turned down his marriage proposal, Walden was thrown back into the dating world in a serious way. The guys may have thought things were going to slow down once Jake got transferred to Japan, but they're about to be proven wrong when a niece of Alan's, who shares more than a few characteristics with her father, shows up at the beach house.",
	        "drm": true,
	        "episodeCount": 0,
	        "genre": "Comedy",
	        "image": {
	            "showImage": "http://mybeautifulcatchupservice.com/img/shows/TwoandahHalfMen_V2.jpg"
	        },
	        "language": "English",
	        "nextEpisode": {
	            "channel": null,
	            "channelLogo": "http://mybeautifulcatchupservice.com/img/player/Ch9_new_logo.gif",
	            "date": null,
	            "html": "Next episode airs: <span> 10:00pm Monday on<br><span class=\"visit\">Visit the Official Website</span></span>",
	            "url": "http://channelnine.ninemsn.com.au/twoandahalfmen/"
	        },
	        "primaryColour": "#ff7800",
	        "seasons": null,
	        "slug": "show/twoandahalfmen",
	        "title": "Two and a Half Men",
	        "tvChannel": "Channel 9"
	    }, {
	        "country": "USA",
	        "description": "Simmering with supernatural elements and featuring familiar and fan-favourite characters from the immensely popular drama The Vampire Diaries, it's The Originals. This sexy new series centres on the Original vampire family and the dangerous vampire/werewolf hybrid, Klaus, who returns to the magical melting pot that is the French Quarter of New Orleans, a town he helped build centuries ago.",
	        "drm": true,
	        "episodeCount": 1,
	        "genre": "Action",
	        "image": {
	            "showImage": "http://mybeautifulcatchupservice.com/img/shows/TheOriginals1280.jpg"
	        },
	        "language": "English",
	        "nextEpisode": {
	            "channel": null,
	            "channelLogo": "http://mybeautifulcatchupservice.com/img/player/logo_go.gif",
	            "date": null,
	            "html": "<br><span class=\"visit\">Visit the Official Website</span></span>",
	            "url": "http://go.ninemsn.com.au/"
	        },
	        "primaryColour": "#df0000",
	        "seasons": [{
	            "slug": "show/theoriginals/season/1"
	        }],
	        "slug": "show/theoriginals",
	        "title": "The Originals",
	        "tvChannel": "GO!"
	    }, {
	        "country": "AUS",
	        "description": "Join the most dynamic TV judging panel Australia has ever seen as they uncover the next breed of superstars every Sunday night. UK comedy royalty Dawn French, international pop superstar Geri Halliwell, (in) famous Aussie straight-talking radio jock Kyle Sandilands, and chart -topping former AGT alumni Timomatic.",
	        "drm": false,
	        "episodeCount": 0,
	        "genre": "Reality",
	        "image": {
	            "showImage": "http://mybeautifulcatchupservice.com/img/shows/AGT.jpg"
	        },
	        "language": "English",
	        "nextEpisode": {
	            "channel": null,
	            "channelLogo": "http://mybeautifulcatchupservice.com/img/player/Ch9_new_logo.gif",
	            "date": null,
	            "html": "Next episode airs:<span>6:30pm Sunday on<br><span class=\"visit\">Visit the Official Website</span></span>",
	            "url": "http://agt.ninemsn.com.au"
	        },
	        "primaryColour": "#df0000",
	        "seasons": null,
	        "slug": "show/australiasgottalent",
	        "title": "Australia's Got Talent",
	        "tvChannel": "Channel 9"
	    }],
	    "skip": 0,
	    "take": 10,
	    "totalRecords": 75
	};
	
	exports.expectedShows = {
	    "response": [{
	        "image": "http://mybeautifulcatchupservice.com/img/shows/16KidsandCounting1280.jpg",
	        "slug": "show/16kidsandcounting",
	        "title": "16 Kids and Counting"
	    }, {
	        "image": "http://mybeautifulcatchupservice.com/img/shows/TheTaste1280.jpg",
	        "slug": "show/thetaste",
	        "title": "The Taste"
	    }, {
	        "image": "http://mybeautifulcatchupservice.com/img/shows/Thunderbirds_1280.jpg",
	        "slug": "show/thunderbirds",
	        "title": "Thunderbirds"
	    }, {
	        "image": "http://mybeautifulcatchupservice.com/img/shows/ScoobyDoo1280.jpg",
	        "slug": "show/scoobydoomysteryincorporated",
	        "title": "Scooby-Doo! Mystery Incorporated"
	    }, {
	        "image": "http://mybeautifulcatchupservice.com/img/shows/ToyHunter1280.jpg",
	        "slug": "show/toyhunter",
	        "title": "Toy Hunter"
	    }, {
	        "image": "http://mybeautifulcatchupservice.com/img/shows/Worlds1280.jpg",
	        "slug": "show/worlds",
	        "title": "World's..."
	    }, {
	        "image": "http://mybeautifulcatchupservice.com/img/shows/TheOriginals1280.jpg",
	        "slug": "show/theoriginals",
	        "title": "The Originals"
	    }]
	};

/***/ }
/******/ ]);
//# sourceMappingURL=serverSpec.js.map