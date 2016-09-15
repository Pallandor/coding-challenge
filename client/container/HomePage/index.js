import React from 'react';

const HomePage = ({children}) => (
  <div>
    <h3>This is a HomePage Component</h3>
    {children}
  </div>
);

HomePage.propTypes = {
  children: React.PropTypes.node,
};

export default HomePage;
