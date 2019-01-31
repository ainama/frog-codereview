import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class APP extends Component {

  handleClick() {
    this.refs.myInput.focus(); // 使用原生的 DOM API 获取焦点;
  }

  render() {
    return (
      <div>
        <input type = 'text' ref = 'myInput' />
        <input
          type = 'button'
          value = '点我输入框获取焦点'
          onClick = { () => this.handleClick() } />
      </div>
    );
  }
}

ReactDOM.render(
  <APP />,
  document.getElementById('root')
);

