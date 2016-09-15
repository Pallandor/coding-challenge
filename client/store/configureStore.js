import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import rootReducer from '../reducers';

const _getMiddleware = () => {
  let middleware = [
    thunk,
  ];

  if (__DEV__) {
    const logger = createLogger();
    middleware = [...middleware, logger];
  }

  return applyMiddleware(...middleware);
};

const _addReduxDevTools = () =>
  window.devToolsExtension ? window.devToolsExtension() : f => f;

const configureStore = initialState => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      _getMiddleware(),
      _addReduxDevTools()
    ));
  return store;
};

export default configureStore;
