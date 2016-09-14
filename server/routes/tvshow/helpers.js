'use strict';

/** Route specific helpers, which are aware of server state e.g. res object.
    So do NOT cast to promises.
**/

exports.testResponse = res => res.status(200).json({aTestResponse: 'fromTvShowHelpers'});

exports.sendShows = (res, shows) => {
  res.status(200).json({
    response: shows,
  });
};
