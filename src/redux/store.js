import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./userReducer";
import watchlistReducer from "./watchlistReducer"

export default configureStore({
    reducer: {
        auth: authReducer,
        watchlist: watchlistReducer,
    },
});
