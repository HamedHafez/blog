import { combineReducers } from 'redux';
import postsReducer from './postReducers';
import usersReducer from './userReducer';

export default combineReducers({
    posts: postsReducer,
    users: usersReducer
});