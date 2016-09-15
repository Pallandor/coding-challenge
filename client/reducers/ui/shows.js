import {
  FETCH_SHOWS_PENDING,
  FETCH_SHOWS_SUCCESS,
  FETCH_SHOWS_ERROR,
} from '../../constants';

const INITIAL_STATE = {
  loading: false,
};

/** Shows UI Reducer **/
const shows = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_SHOWS_PENDING:
    return {
      ...state,
      loading: true,
    };
  case FETCH_SHOWS_SUCCESS:
  case FETCH_SHOWS_ERROR:
    return {
      ...state,
      loading: false,
    };
  default:
    return state;
  }
};

export default shows;

/** State Selectors **/
export const getShowsLoadingState = state => state.ui.shows.loading;
