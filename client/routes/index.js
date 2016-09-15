import React from 'react';
import { IndexRoute, Route } from 'react-router';

import Test from '../components/TestComponent';

export default (
<Route path="/" component={ Test }>
  <Route component={ Test }>
    <IndexRoute component={ Test } />
    <Route path="articles/:id" component={ Test } />
  </Route>
  <Route path="about" component={ Test } />
  <Route path="contact" component={ Test } />
</Route>
);
