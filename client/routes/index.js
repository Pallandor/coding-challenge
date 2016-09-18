import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from '../components/App';
import HomePage from '../containers/HomePage';
import ShowList from '../components/ShowList';
import ShowPage from '../components/ShowPage';
import About from '../components/About';
import Github from '../components/Github';

export default (
<Route path="/" component={ App }>
  <Route component={ HomePage }>
    <IndexRoute component={ ShowList } />
    <Route path="show/:slug" component={ ShowPage } />
  </Route>
  <Route path="about" component={ About } />
  <Route path="github" component={ Github } />
</Route>
);
