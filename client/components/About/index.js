import React from 'react';
import BasePage from '../BasePage';

const About = () => (
  <BasePage title="About RogFlix">
    <p>
      React/Redux under the hood. React-router takes care of rendering the
      correct component trees, Redux takes care of handling all state. TV Shows
      page is an example of Node API consumer, rendering JSON as a list of
      components, so will change dynamically on reload, when mock data store
      on Node/Express server is updated.
    </p>
  </BasePage>
);

export default About;
