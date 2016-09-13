'use strict';

exports.testResponse = res => res.status(200).json({aTestResponse: 'fromTvShowHelpers'});

exports.sanitiseShows = shows => shows.map(show => ({
  image: show.image.showImage,
  slug: show.slug,
  title: show.title,
}));

exports.sendShows = (res, shows) => {
  res.status(200).json({
    response: shows,
  })
};
