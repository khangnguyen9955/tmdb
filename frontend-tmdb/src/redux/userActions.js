import axios from "axios";
import {LOGIN_FAILURE, LOGIN_START, LOGIN_SUCCESS, LOGOUT} from "./types";
import {getAuth} from "./watchlistActions";

export const loginUser = (user) => async (dispatch) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("https://tmdb-server-khangnguyen9955.herokuapp.com/user/login", user);
        localStorage.setItem("token", JSON.stringify(res.data.accessToken));
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure({login: err.response.data}));
    }
};

export const registerUser = (newUser) => async (dispatch) => {
    dispatch(loginStart());
    try {
        const res = await axios.post(
            "https://tmdb-server-khangnguyen9955.herokuapp.com/user/register",
            newUser
        );
        localStorage.setItem("token", JSON.stringify(res.data.accessToken));

        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure(err.response.data));
    }
};

export const logOut = () => async (dispatch) => {
    localStorage.removeItem("token");
    dispatch(logoutUser());
};

export const fetchUserLogin = () => async (dispatch) => {
    dispatch(loginStart());
    try {
        const res = await axios.get("https://tmdb-server-khangnguyen9955.herokuapp.com/user/fetch", {
            headers: {token: getAuth()},
        });
        dispatch(loginSuccess(res.data.user));
    } catch (err) {
        dispatch(loginFailure({login: err.response.data}));
    }
};

const loginStart = () => ({
    type: LOGIN_START,
});

const loginFailure = (err) => ({
    type: LOGIN_FAILURE,
    err,
});

const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    user,
});
const logoutUser = () => ({
    type: LOGOUT,
});
