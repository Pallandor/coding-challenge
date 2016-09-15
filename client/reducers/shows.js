import { FETCH_SHOWS_SUCCESS } from '../constants';

const INITIAL_STATE = [];

/** Shows Reducer **/
const showsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_SHOWS_SUCCESS:
    return action.shows;
  default:
    return state;
  }
};

export default showsReducer;

/** State Selectors **/
export const getShows = state => state.shows;
