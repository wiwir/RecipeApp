export const REMOVE_POST = "REMOVE_POST";
export const ADD_POST = "ADD_POST";

export const removePost = id => ({ type: REMOVE_POST, id });
export const addPost = payload => ({ type: ADD_POST, payload });
