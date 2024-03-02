export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'todos/todoAdded': {
      // We need to return a new array
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false
        }
      ]
    }
    case 'todos/todoToggled': {
      return state.map(todo => {
        if (todo.id !== action.payload) {
          return todo
        }

        return {
          ...todo,
          completed: !todo.completed
        }
      })
    }
    case 'todos/todoDeleted': {
      return state.filter(todo => todo.id !== action.payload)
    }
    default:
      return state
  }
}
