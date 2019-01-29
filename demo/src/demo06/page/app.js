import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import '../sass/index.scss';

class App extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      todoValue: ''
    };
  }

  _handleTodoChange(e) {
    this.setState({
      todoValue: e.target.value
    });
  }

  _addTodoClick() {
    this.props.actions.addTodoAction(this.state.todoValue);
    this.setState({ todoValue: '' });
  }

  _timeFormat(time) {
    let _date = new Date(time);
    let _month = _date.getMonth() + 1;
    let _day = _date.getDate();
    return _month + '月' + _day + '日';
  }

  _todoClick(i) {
    this.props.actions.selectTodoAction(i);
  }

  render() {
    let { todoValue } = this.state;
    let { store } = this.props;
    return (
      <div>

        <div className = 'form'>
          <input
            className = 'input'
            placeholder = '请输入TODO内容'
            value = { todoValue }
            onChange = { (e) => this._handleTodoChange(e) } />
          <div className = 'btn' onClick = { () => this._addTodoClick() }>按钮</div>
        </div>

        {
          store.todoList.map((item, i) => {
            return (
              <div className = 'item' key = { i } onClick = { () => this._todoClick(i) }>
                <div className = 'flex'>
                  <div className = { item.isSelect ? 'item-select' : 'item-un-select' } />
                  <div className = { item.isSelect ? 'item-todo-active' : 'item-todo' }>
                    { item.todo }
                  </div>
                </div>
                <div className = 'item-time'>{ this._timeFormat(item.time) }</div>
              </div>
            );
          })
        }

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    store: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
