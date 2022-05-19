import {
    ADD_TO_WATCHLIST_FAILURE,
    ADD_TO_WATCHLIST_REQUEST,
    ADD_TO_WATCHLIST_SUCCESS,
    GET_WATCHLIST_FAILURE,
    GET_WATCHLIST_REQUEST,
    GET_WATCHLIST_SUCCESS,
    REMOVE_FROM_WATCHLIST_FAILURE,
    REMOVE_FROM_WATCHLIST_REQUEST,
    REMOVE_FROM_WATCHLIST_SUCCESS
} from "./types";
import axios from "axios";

export const getAuth = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
        return `Bearer ${token}`;


    } else {
        return {};
    }


}


export const addToWatchlist = (movie) => async (dispatch) => {
    dispatch(addToWatchlistRequest());
    try {
        const res = await axios.post("http://localhost:8000/watchlist/add", {movie}, {headers: {token: getAuth()}});
        console.log(res.data);
        dispatch(addToWatchlistSuccess(res.data));
    } catch (err) {
        dispatch(addToWatchlistFailure());
        console.log(err);
    }
}


const getWatchlistRequest = () => ({
    type: GET_WATCHLIST_REQUEST,
});

const getWatchlistSuccess = (watchlist) => ({
    type: GET_WATCHLIST_SUCCESS,
    watchlist
});


const getWatchlistFailure = () => ({
    type: GET_WATCHLIST_FAILURE,
});


const addToWatchlistRequest = () => ({
    type: ADD_TO_WATCHLIST_REQUEST
})


const addToWatchlistSuccess = (movie) => ({
    type: ADD_TO_WATCHLIST_SUCCESS,
    movie
})


const addToWatchlistFailure = () => ({
    type: ADD_TO_WATCHLIST_FAILURE,
})


const removeFromWatchlistRequest = () => ({
    type: REMOVE_FROM_WATCHLIST_REQUEST,

})

const removeFromWatchlistSuccess = (id) => ({
    type: REMOVE_FROM_WATCHLIST_SUCCESS,
    id
})

const removeFromWatchlistFailure = () => ({
    type: REMOVE_FROM_WATCHLIST_FAILURE,

})



