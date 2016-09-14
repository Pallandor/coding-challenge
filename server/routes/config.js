'use strict';

/** Config for: api/tvshow/filter **/

// Default predicate, returns shows with a drm set true and episodeCount > 0
exports.defaultTvShowFilterPredicate = show => show.drm && show.episodeCount;

// Default shape when cleaning tv show object for route response
exports.defaultTvShowSanitiser = show => ({
  image: show.image && show.image.showImage || null,
  slug: show.slug || null,
  title: show.title || null,
});

exports.defaultExpectedShowShape = {};
