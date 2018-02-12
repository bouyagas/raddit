import _ from 'lodash';
import { postActonTypes } from '../action/actionTypes/postsActionTypes';

const postsReducer = (state = {}, action) => {
  switch (action.type) {
    case postActonTypes.FETCHPOSTS:
      return _.mapKeys(action.payload.data, 'id');

    case postActonTypes.FETCHPOST:
      return { ...state, [action.payload.data.id]: action.payload.data };

    case postActonTypes.DELETEPOST:
      return _.omit(state, action.payload);

    default:
      return state;
  }
};

export default postsReducer;
