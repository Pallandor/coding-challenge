import * as api from '../api/shows';
import {
  FETCH_SHOWS_PENDING,
  FETCH_SHOWS_SUCCESS,
  FETCH_SHOWS_ERROR,
} from '../constants';

/** Thunks **/
export const fetchShows = () => dispatch => {
  dispatch({
    type: FETCH_SHOWS_PENDING,
  });

  api.fetchShows()
    .then(fetchedShows => {
      dispatch({
        type: FETCH_SHOWS_SUCCESS,
        shows: fetchedShows,
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_SHOWS_ERROR,
        message: err.message || 'Oops! Something went horribly wrong...',
      });
    });
};
