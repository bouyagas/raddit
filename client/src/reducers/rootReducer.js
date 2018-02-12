import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';
import postsReducer from './postsReducer';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  posts: postsReducer,
});

export default rootReducer;
