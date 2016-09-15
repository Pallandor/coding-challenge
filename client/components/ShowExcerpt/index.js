import React from 'react';

const ShowExcerpt = ({children}) => (
  <div>
    <h3>This is a ShowExcerpt Component</h3>
    {children}
  </div>
);

ShowExcerpt.propTypes = {
  children: React.PropTypes.node,
};

export default ShowExcerpt;
