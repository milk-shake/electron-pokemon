import {applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import createLogger from 'redux-logger';

const logger = createLogger({collapsed: true});


import reducer from "./reducers";

const middleware = applyMiddleware(promise(), thunk, logger);
//logger()
export default createStore(reducer, middleware);
