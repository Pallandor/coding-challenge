import React from 'react';

const ShowList = ({shows}) => (
  <div>
    <h3>This is a ShowList Component</h3>
    <h5>Below are children AND shows!</h5>
    <pre>{JSON.stringify(shows)}</pre>
  </div>
);

ShowList.propTypes = {
  shows: React.PropTypes.array,
};

export default ShowList;
