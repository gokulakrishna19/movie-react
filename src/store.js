import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';


const middleware = applyMiddleware(thunk, logger);

const initialState = {};

const store = createStore(rootReducer, initialState, middleware)

export default store;
