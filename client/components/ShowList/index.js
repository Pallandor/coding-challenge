import React from 'react';

const ShowList = ({children}) => (
  <div>
    <h3>This is a ShowList Component</h3>
    {children}
  </div>
);

ShowList.propTypes = {
  children: React.PropTypes.node,
};

export default ShowList;
