export const visibilityFilterReducer = (state = 'all', action) => {
    switch (action.type) {
        case 'visibilityFilter/changed': {
            return action.payload
        }
        default:
            return state
    }
}