import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import ui from './ui';
import shows from './shows';

/** App's Root Reducer **/
const rootReducer = combineReducers({
  routing: routerReducer,
  ui,
  shows,
  // add reducers here
});

export default rootReducer;
