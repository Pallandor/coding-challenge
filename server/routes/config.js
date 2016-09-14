'use strict';

/** Config for: api/tvshow/filter **/
exports.defaultTvShowFilterPredicate = show => show.drm && show.episodeCount;

exports.defaultTvShowSanitiser = show => ({
  image: show.image && show.image.showImage || null,
  slug: show.slug || null,
  title: show.title || null,
});

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
