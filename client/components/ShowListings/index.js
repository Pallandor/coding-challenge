import React from 'react';

const ShowListings = ({children}) => (
  <div>
    <h3>This is a ShowListings Component</h3>
    {children}
  </div>
);

ShowListings.propTypes = {
  children: React.PropTypes.node,
};

export default ShowListings;
