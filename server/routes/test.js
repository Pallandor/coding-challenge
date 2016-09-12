'use strict';

/** API Route Handlers **/

exports.postTest = (req, res) => {
  res.status(200)
    .json({
      didThis: 'test work????',
    });
};

exports.getTest = (req, res) => {
  res.status(200)
    .json({
      howAboutGet: 'did it also work????',
    });
};
