//create a store for me

import {configureStore} from "@reduxjs/toolkit";
import podcastReducer from "../features/podcasts/podcastSlice";
import userReducer from "../features/users/userSlice";
export const store = configureStore({
    reducer: {
        podcasts: podcastReducer,
        user: userReducer,
    },
});
