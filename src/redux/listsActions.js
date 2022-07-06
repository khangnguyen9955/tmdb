import axios from "axios";
import { getAuth } from "./watchlistActions";
import {
  ADD_MOVIE_TO_LIST_FAILURE,
  ADD_MOVIE_TO_LIST_REQUEST,
  ADD_MOVIE_TO_LIST_SUCCESS,
  ADD_NEW_LIST_FAILURE,
  ADD_NEW_LIST_REQUEST,
  ADD_NEW_LIST_SUCCESS,
  GET_ALL_LIST_FAILURE,
  GET_ALL_LIST_REQUEST,
  GET_ALL_LIST_SUCCESS,
  REMOVE_LIST_FAILURE,
  REMOVE_LIST_REQUEST,
  REMOVE_LIST_SUCCESS,
  REMOVE_MOVIE_FROM_LIST_FAILURE,
  REMOVE_MOVIE_FROM_LIST_REQUEST,
  REMOVE_MOVIE_FROM_LIST_SUCCESS,
} from "./types";

export const addNewList = (list) => async (dispatch) => {
  dispatch(addNewListRequest());
  try {
    const res = await axios.post(
      "http://localhost:8000/list/create",
      { list },
      { headers: { token: getAuth() } }
    );
    dispatch(addNewListSuccess(res.data));
  } catch (err) {
    console.log(err);
    dispatch(addNewListFailure());
  }
};

export const getAllList = () => async (dispatch) => {
  dispatch(getAllListRequest());
  try {
    const res = await axios.get("http://localhost:8000/list/", {
      headers: { token: getAuth() },
    });
    dispatch(getAllListSuccess(res.data));
  } catch (e) {
    dispatch(getAllListFailure());
    console.log(e);
  }
};

export const removeList = (listId) => async (dispatch) => {
  dispatch(removeListRequest());
  try {
    const res = await axios.post(
      "http://localhost:8000/list/remove",
      { listId },
      { headers: { token: getAuth() } }
    );
    dispatch(removeListSuccess(res.data));
  } catch (e) {
    dispatch(removeListFailure());
    console.log(e);
  }
};

export const addMovieToList = (listId, movie) => async (dispatch) => {
  dispatch(addMovieToListRequest());
  try {
    const res = await axios.post(
      "http://localhost:8000/list/add",
      { listId, movie },
      { headers: { token: getAuth() } }
    );
    dispatch(addMovieToListSuccess(res.data));
  } catch (e) {
    dispatch(addMovieToListFailure());
  }
};

export const removeMovieFromList = (listId, movieId) => async (dispatch) => {
  dispatch(removeMovieFromListRequest());
  try {
    const res = await axios.post(
      "http://localhost:8000/list/delete",
      {
        listId,
        movieId,
      },
      {
        headers: { token: getAuth() },
      }
    );
    dispatch(removeMovieFromListSuccess(res.data));
  } catch (e) {
    console.log(e);
    dispatch(removeMovieFromListFailure());
  }
};

const removeListRequest = () => ({
  type: REMOVE_LIST_REQUEST,
});

const removeListSuccess = (data) => ({
  type: REMOVE_LIST_SUCCESS,
  data,
});

const removeListFailure = () => ({
  type: REMOVE_LIST_FAILURE,
});

const getAllListRequest = () => ({
  type: GET_ALL_LIST_REQUEST,
});

const getAllListSuccess = (lists) => ({
  type: GET_ALL_LIST_SUCCESS,
  lists,
});
const getAllListFailure = () => ({
  type: GET_ALL_LIST_FAILURE,
});

const addNewListRequest = () => ({
  type: ADD_NEW_LIST_REQUEST,
});

const addNewListSuccess = (list) => ({
  type: ADD_NEW_LIST_SUCCESS,
  list,
});

const addNewListFailure = () => ({
  type: ADD_NEW_LIST_FAILURE,
});

const addMovieToListRequest = () => ({
  type: ADD_MOVIE_TO_LIST_REQUEST,
});
const addMovieToListSuccess = (data) => ({
  type: ADD_MOVIE_TO_LIST_SUCCESS,
  data,
});

const addMovieToListFailure = () => ({
  type: ADD_MOVIE_TO_LIST_FAILURE,
  error: "This movie has been added to your list",
});

const removeMovieFromListRequest = () => ({
  type: REMOVE_MOVIE_FROM_LIST_REQUEST,
});

const removeMovieFromListSuccess = (data) => ({
  type: REMOVE_MOVIE_FROM_LIST_SUCCESS,
  data,
});

const removeMovieFromListFailure = () => ({
  type: REMOVE_MOVIE_FROM_LIST_FAILURE,
});
