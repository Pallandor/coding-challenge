'use strict';

/** Controllers Config/Defaults **/

/** Provides a default predicate/filter test that accepts a Show object
    and returns a truthy value if DRM is set to true and episode Count
    is positive (>0), otherwise returns falsy value (0);
**/
exports.defaultShowFilterPredicate = show => show.drm && show.episodeCount;

/** Provides a default show transformer, taking a Show object and
    returning a new object with the Show's image URL, slug and title
    if available or null where those properties are not available.
**/
exports.defaultShowTransform = show => ({
  image: show.image && show.image.showImage || null,
  slug: show.slug || null,
  title: show.title || null,
});

exports.showsNotArrayError =
  'Shows was not a valid array. Please check to ensure an array of shows is ' +
  'being included in the relevant object';
