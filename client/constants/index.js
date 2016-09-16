const devmode = process.env.NODE_ENV !== 'production';

/** API Constants **/
export const BASE_URL = 'https://love-your-tech-stack.herokuapp.com';
export const BASE_API_URL = devmode ? 'http://localhost:8080/api' : `${BASE_URL}/api`;

/** Action Constants **/
export const FETCH_SHOWS_PENDING = 'App/FETCH_SHOWS_PENDING';
export const FETCH_SHOWS_SUCCESS = 'App/FETCH_SHOWS_SUCCESS';
export const FETCH_SHOWS_ERROR = 'App/FETCH_SHOWS_ERROR';
