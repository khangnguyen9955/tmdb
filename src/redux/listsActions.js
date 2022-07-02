import axios from "axios";
import { getAuth } from "./watchlistActions";
import {
  ADD_NEW_LIST_FAILURE,
  ADD_NEW_LIST_REQUEST,
  ADD_NEW_LIST_SUCCESS,
  GET_ALL_LIST_FAILURE,
  GET_ALL_LIST_REQUEST,
  GET_ALL_LIST_SUCCESS,
  REMOVE_LIST_FAILURE,
  REMOVE_LIST_REQUEST,
  REMOVE_LIST_SUCCESS,
} from "./types";

export const addNewList = (list) => async (dispatch) => {
  dispatch(addNewListRequest());
  try {
    const res = await axios.post(
      "http://localhost:8000/list/add",
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

export const removeFromList = (listId) => async (dispatch) => {
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

const removeListRequest = () => ({
  type: REMOVE_LIST_REQUEST,
});

const removeListSuccess = (moveId) => ({
  type: REMOVE_LIST_SUCCESS,
  moveId,
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
