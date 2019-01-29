const defaultState = {
  todoList: [
    {
      state: 0,
      todo: '123',
      time: new Date().getTime(),
      isSelect: false
    },
    {
      state: 0,
      todo: '456456456456456456456456456456456456456456456456456',
      time: new Date().getTime(),
      isSelect: true
    }
  ]
};

export function todo(state = defaultState, action) {
  switch (action.type) {
    case 'ADD_TODO': {
      let _todoList = state.todoList;
      let _obj = {
        state: 0,
        todo: action.payload,
        time: new Date().getTime(),
        isSelect: false
      };
      _todoList.push(_obj);
      return Object.assign({}, state, { todoList: _todoList });
    }
    case 'SELECT_TODO': {
      let _todoList = state.todoList;
      let _i = action.payload;
      let _isSelect = _todoList[_i].isSelect;
      _todoList[_i].isSelect = !_isSelect;
      return Object.assign({}, state, { todoList: _todoList });
    }
    default:
      return state;
  }
}
