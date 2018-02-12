import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import Reduxpromise from 'redux-promise';
import rootReducer from '../reducers/rootReducer';

const configStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, Reduxpromise, logger)),
);

export default configStore;
