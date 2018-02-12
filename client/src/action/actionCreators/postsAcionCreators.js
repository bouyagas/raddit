import axios from 'axios';
import { postActonTypes } from '../actionTypes/postsActionTypes';

const ROOT_URL = '  http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=PERPERCLIP1234';

export const fetchPosts = () => {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return dispatch => {
    dispatch({
      type: postActonTypes.FETCHPOSTS,
      payload: request,
    });
  };
};

export const fetchPost = id => {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return dispatch => {
    dispatch({
      type: postActonTypes.FETCHPOST,
      payload: request,
    });
  };
};

export const createPost = (values, callback) => {
  const request = axios
    .post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());

  return dispatch => {
    dispatch({
      type: postActonTypes.CREATEPOSTS,
      payload: request,
    });
  };
};

export const deletePost = (id, callback) => {
  const request = axios
    .delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());

  return dispatch => {
    dispatch({
      type: postActonTypes.DELETEPOST,
      payload: id,
    });
  };
};
