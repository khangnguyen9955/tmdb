import {LOGIN_FAILURE, LOGIN_START, LOGIN_SUCCESS, LOGOUT} from "./types";

const initialState = {
	isAuth: !!localStorage.getItem("token"), // convert object to boolean
	currentUser: {},
	error: {},
	isFetching: false,
}
const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_START:
			return {
				...state,
				isFetching: true,
			};

		case LOGIN_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.error,
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				isFetching: false,
				currentUser: action.payload,
				error: {},
			};
		case LOGOUT:
			return {
				...state,
				isFetching: false,
				currentUser: {},
				error: {},
			}
		default:
			return state;
	}

};

export default userReducer;