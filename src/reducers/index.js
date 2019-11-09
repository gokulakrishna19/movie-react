import { combineReducers } from 'redux';
import searchReducer from './searchReducers';


export default combineReducers({
    movies: searchReducer
});
