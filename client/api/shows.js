import axios from 'axios';

import { BASE_API_URL } from '../constants';

export const fetchShows = () =>
  axios.get(`${BASE_API_URL}/shows`)
    .then(response => response.data.payload);
