import React from 'react';

const Footer = ({children}) => (
  <div>
    <h3>This is the Footer Component.</h3>
    {children}
  </div>
);

Footer.propTypes = {
  children: React.PropTypes.node,
};

export default Footer;
