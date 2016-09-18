import React from 'react';

const About = () => (
  <article className={styles.container}>
    <h1>About RogFlix</h1>
    <p className={styles.paragraph}>
      React/Redux under the hood. React-router takes care of rendering the
      correct component trees, Redux takes care of handling all state. TV Shows
      page is an example of Node API consumer, rendering JSON as a list of
      components, so will change dynamically on reload, when mock data store
      on Node/Express server is updated.
    </p>
  </article>
);

const styles = {
  container: 'pa3 pa5-ns',
  paragraph: 'measure lh-copy',
};

About.propTypes = {
  children: React.PropTypes.node,
};

export default About;
