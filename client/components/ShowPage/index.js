import React from 'react';

const ShowPage = ({title, tvChannel, description, imageLink}) => (
    <div>
      <h3>This is a ShowPage Component</h3>
      <h3>Title is: {title}</h3>
      <h3>Tv Channel is {tvChannel}</h3>
      <h3>Description is  {description}</h3>
      <h3>ImageLink is: {imageLink}</h3>
    </div>
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
