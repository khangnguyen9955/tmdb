import axios from "axios";
import {loginFailure, loginStart, loginSuccess} from "./authSlice";


export const loginUser = (user) => async (dispatch) => {
	dispatch(loginStart());
	try {
		const res = await axios.post("http://localhost:8000/user/login", user)
		localStorage.setItem("token", JSON.stringify(res.data.accessToken));
		dispatch(loginSuccess(res.data))
	}
	catch (err) {
		dispatch(loginFailure());
	}
};

export const registerUser = (newUser) => async (dispatch) => {
	dispatch(loginStart());
	try {
		const res = await axios.post("http://localhost:8000/user/register", newUser)
		localStorage.setItem("token", JSON.stringify(res.data.accessToken));
		dispatch(loginSuccess(res.data));
	}
	catch (err) {
		dispatch(loginFailure());
	}
}




