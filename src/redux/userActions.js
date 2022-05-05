import axios from "axios";
import {loginFailure, loginStart, loginSuccess} from "./authSlice";


export const loginUser = (user) => async (dispatch) => {
	dispatch(loginStart());
	try {
		const res = await axios.post("http://localhost:8000/user/login", user)
		dispatch(loginSuccess(res.data))
	}
	catch (err) {
		dispatch(loginFailure());
	}
};



