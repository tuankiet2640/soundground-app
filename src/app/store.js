//create a store for me

import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
import playerReducer from "../features/player/playerSlice";
export const store = configureStore({
    reducer: {
        player: playerReducer,
        user: userReducer,
    },
});
