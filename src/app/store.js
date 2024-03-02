//create a store for me

import {configureStore} from "@reduxjs/toolkit";
import {todosReducer} from "./todosReducer";
import {visibilityFilterReducer} from "./visibilityFilterReducer";

export const store = configureStore({
    reducer: {
        // Define a top-level state field named `todos`, handled by `todosReducer`
        todos: todosReducer,
        // Define a top-level state field named `visibilityFilter`, handled by `visibilityFilterReducer`
        visibilityFilter: visibilityFilterReducer
    }
});