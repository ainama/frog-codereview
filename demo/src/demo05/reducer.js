const defaultState = {
  // inputlist: [{
  //   isFinish: false,
  //   value: 'react-redux用法',
  // }],
  inputlist: [],
  value: '',
};

export function reducer(state = defaultState, action) {
  //console.log(action);

  switch (action.type) {
    case 'change_input': {
      return {
        inputlist: state.inputlist,
        value: action.value,
      }
    }
    case 'change_button': {
      let _inputlist = state.inputlist;
      let _obj = {
        isFinish: false,
        value: action.value,
      };
      _inputlist.push(_obj);
      return {
        inputlist: Object.assign([], state.inputlist),
        value: ''
      }
    }
    case 'change_img': {
      let _inputlist = state.inputlist;
      let _index = action.value;
      let _isFinish = _inputlist[_index].isFinish;
      _inputlist[_index].isFinish = !_isFinish;
      return {
        inputlist: Object.assign([], state.inputlist),
        value: ''
      }
    }
    case 'change_revise': {
      let _inputlist = state.inputlist;
      let _index = action.index;
      _inputlist[_index].value = action.value;
      return {
        inputlist: Object.assign([], state.inputlist),
        value: ''
      }
    }
    default:
      return state;
  }

}

