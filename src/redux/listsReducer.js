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
} from "./types";
import update from "react-addons-update";

const initialState = {
  lists: [],
  isAdding: false,
  isLoading: false,
  isRemoving: null,
  isAddingMovie: false,
  isLoadingMovie: false,
  isRemovingMovie: null,
  message: {},
};

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ALL_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case GET_ALL_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        lists: action.lists,
      };
    case ADD_NEW_LIST_REQUEST:
      return {
        ...state,
        isAdding: true,
      };
    case ADD_NEW_LIST_SUCCESS:
      return {
        ...state,
        isAdding: false,
        lists: [action.list, ...state.lists],
      };
    case ADD_NEW_LIST_FAILURE:
      return {
        ...state,
        isAdding: false,
      };
    case REMOVE_LIST_REQUEST:
      return {
        ...state,
        isRemoving: action.listId,
      };
    case REMOVE_LIST_SUCCESS:
      return {
        ...state,
        lists: state.lists.filter((list) => list.id !== action.listId),
      };
    case REMOVE_LIST_FAILURE:
      return {
        ...state,
        isRemoving: null,
      };
    case ADD_MOVIE_TO_LIST_REQUEST:
      return {
        ...state,
        isAddingMovie: true,
      };
    case ADD_MOVIE_TO_LIST_SUCCESS:
      return update(state, {
        lists: {
          [action.data.listIndex]: {
            listMovie: { $push: [action.data.movie] },
          },
        },
      });
    //  case 'SOME_ACTION':
    //   return update(state, {
    //     contents: {
    //       [action.id]: {
    //         text: {$set: action.payload}
    //       }
    //     }
    //   });

    //case 'SOME_ACTION':
    //    return {
    //        ...state,
    //        contents: state.contents.map(
    //            (content, i) => i === 1 ? {...content, text: action.payload}
    //                                    : content
    //        )
    //     }
    case ADD_MOVIE_TO_LIST_FAILURE:
      return {
        ...state,
        isAddingMovie: false,
        message: action.err,
      };

    default:
      return state;
  }
};
export default listsReducer;
