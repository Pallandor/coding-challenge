'use strict';

/** Config for: api/tvshow/filter **/
exports.defaultTvShowFilterPredicate = show => show.drm && show.episodeCount;
