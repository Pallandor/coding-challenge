import React from 'react';

const ShowPage = ({title, tvChannel, description, imageLink}) => (
  <article className="cf ph3 ph5-ns pv4">
    <header className="fn fl-ns w-50-ns pr4-ns">
      <h1 className="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">{title}</h1>
      <h2 className="f3 mid-gray lh-title">Channel: {tvChannel}</h2>
      <p className="f6 ttu tracked gray">Show Description</p>
      <p className="f5 lh-copy measure mt0-ns">{description}</p>
    </header>
    <div className="fn fl-ns w-50-ns">
      <img src={imageLink} className="w-100 f5 measure" alt="something here!" />
    </div>
  </article>
);

ShowPage.defaultProps = {
  title: 'Title not found',
  imageLink: 'http://mi9.com.au/img/home/9Now_rotating.jpg',
  tvChannel: 'Cannot find TV channel',
  description: 'No description found for this TV show.',
};

ShowPage.propTypes = {
  title: React.PropTypes.string,
  tvChannel: React.PropTypes.string,
  description: React.PropTypes.string,
  imageLink: React.PropTypes.string,
};

export default ShowPage;
