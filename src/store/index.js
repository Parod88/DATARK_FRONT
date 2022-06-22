import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import logger from 'redux-logger';

import thunk from 'redux-thunk';
import * as reducers from './reducers/reducers';

const api = {};

const configureStore = (preloadedState, { history }) => {
  const middlewares = [
    routerMiddleware(history),
    thunk.withExtraArgument({ api, history }),
    logger,
  ];
  const store = legacy_createStore(
    combineReducers({ ...reducers, router: connectRouter(history) }),
    preloadedState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  return store;
};

export default configureStore;
