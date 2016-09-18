import React from 'react';
import Loading from '../Loading';

const About = () => (
  <div>
    <h3>This is the About Component</h3>
    <Loading />
  </div>
);

About.propTypes = {
  children: React.PropTypes.node,
};

export default About;
