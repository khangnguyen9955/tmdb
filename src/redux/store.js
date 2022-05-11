import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./userReducer";

export default configureStore({
	reducer: {
		auth: authReducer,
	},
});
