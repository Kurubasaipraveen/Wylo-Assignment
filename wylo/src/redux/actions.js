export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';
export const SET_POSTS = 'SET_POSTS';

export const addPost = (post) => ({
  type: ADD_POST,
  payload: post,
});

export const editPost = (post) => ({
  type: EDIT_POST,
  payload: post,
});

export const setPosts = (posts) => ({
  type: SET_POSTS,
  payload: posts,
});
