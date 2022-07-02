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

const initialState = {
  lists: [],
  listMovie: [],
  isAdding: false,
  isLoading: false,
  isRemoving: null,
  isAddingMovie: false,
  isLoadingMove: false,
  isRemovingMovie: null,
};
//
// Lists:[
//     {
//         listName: 1
//         listMovie:[
//             {movie1},
//             {movie2},
//         ]
//     },
//
//     {
//         listName:2,
//         listMovie:[
//             {movie1},
//             {movie2}
//         ]
//     }
// ]

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
    default:
      return state;
  }
};
export default listsReducer;
