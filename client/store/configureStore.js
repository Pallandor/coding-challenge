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

const _getEnhancers = () => {
  const enhancers = [];

  if (__DEV__ && window.devToolsExtension) {
    enhancers.push(window.devToolsExtension());
  }

  return enhancers;
};

const configureStore = initialState => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      _getMiddleware(),
      ..._getEnhancers()
    ));
  return store;
};

export default configureStore;
