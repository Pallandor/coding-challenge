import React from 'react';

const ShowPage = ({title}) => (
  <div>
    <h3>This is a ShowPage Component</h3>
    <h3>Title is: {title}</h3>
  </div>
);

ShowPage.propTypes = {
  title: React.PropTypes.string,
};

export default ShowPage;
