import {visibilityFilterReducer} from "./visibilityFilterReducer";
import {todosReducer} from "./todosReducer";

export const rootReducer = (state = {}, action) => {
    return {
        todos: todosReducer(state.todos, action),
        visibilityFilter: visibilityFilterReducer(state.visibilityFilter, action)
    }
}