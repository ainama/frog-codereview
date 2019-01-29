import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

class App extends Component {
  render() {
    const {
      PayIncrease,
      PayDecrease
    } = this.props;
    return (
      <div className = 'App'>
        <div className = 'App'>
          <h2>当前数值为{ this.props.tiger }</h2>
          <button onClick = { PayIncrease }>加</button>
          <button onClick = { PayDecrease }>减</button>
        </div>
      </div>
    );
  }
}

const tiger = 10;

//这是action
const increase = {
  type: '加'
};
const decrease = {
  type: '减'
};

//这是reducer
const reducer = (state = tiger, action) => {
  // console.log(tiger, action.type);
  switch (action.type) {
    case '加':
      return state += 1;
    case '减':
      return state -= 1;
    default:
      return state;
  }
};
//创建store
const store = createStore(reducer);

//需要渲染什么数据
function mapStateToProps(state) {
  //console.log(state); //10
  return {
    tiger: state
  }
}

//需要触发什么行为
function mapDispatchToProps(dispatch) {

  return {
    PayIncrease: () => dispatch(increase),
    PayDecrease: () => dispatch(decrease)
  }
}

//连接组件
App = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
  <Provider store = { store }>
    <App />
  </Provider>,
  document.getElementById('root')
);