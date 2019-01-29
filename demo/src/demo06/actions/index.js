export function addTodoAction(data) {
  return {
    type: 'ADD_TODO',
    payload: data
  }
}

export function selectTodoAction(data) {
  return {
    type: 'SELECT_TODO',
    payload: data
  }
}
