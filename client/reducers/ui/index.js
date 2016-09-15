import { combineReducers } from 'redux';

import shows from './shows';

/** Root UI Reducer **/
const uiReducer = combineReducers({
  shows,
  // add ui reducers here
});

export default uiReducer;
