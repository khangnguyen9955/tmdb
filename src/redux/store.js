import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./userReducer";
import watchlistReducer from "./watchlistReducer";
import listsReducer from "./listsReducer";

export default configureStore({
  reducer: {
    auth: authReducer,
    watchlist: watchlistReducer,
    lists: listsReducer,
  },
});
