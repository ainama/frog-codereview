import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators, } from 'redux';
import { Provider, connect } from 'react-redux';

import finish from '../img/finish.png';
import finish_active from '../img/finish_active.png';

import * as actions from './action';
import store from './store';

import './sass/index.scss';

class App extends Component {

  _ChangeHandle(e) {
    let value = e.target.value;
    this.props.actions.changeInput(value);
  }

  _SubmitValue() {
    let value = this.props.propsValue;

    if (value === '') {
      alert('内容不能为空');
      return;
    }

    this.props.actions.changeButton(value);
  }

  _FinishState(i) {
    this.props.actions.changeImg(i);
  }

  _ChangeRevise(e, i) {
    let value = e.target.value;
    this.props.actions.changeRevise(value, i);
  }

  render() {
    const {
      propsValue,
      inputlist
    } = this.props;

    return (
      <div className = 'comment-body'>
        <div className = 'comment-input'>
          <input
            className = 'comment-input-style'
            type = 'text'
            placeholder = '请输入内容'
            value = { propsValue }
            onChange = { (e) => this._ChangeHandle(e) } />
        </div>

        <div className = 'comment-button'>
          <button onClick = { () => this._SubmitValue() }>
            保存
          </button>
        </div>
        <div className = 'clearfloat'></div>
        <div className = 'comment-list'>

          {

            inputlist.map((inputlist, i) => {
              return (
                <div
                  key = { i }
                  className = { inputlist.isFinish ? 'gary-color comment-list-style' : 'black-color comment-list-style' }>
                  <img
                    src = { inputlist.isFinish ? finish_active : finish }
                    alt = ''
                    onClick = { () => this._FinishState(i) } />
                  <input
                    className = 'revisetext'
                    type = 'text'
                    value = { inputlist.value }
                    readOnly = { inputlist.isFinish ? 'readOnly' : '' }
                    onChange = { (e) => this._ChangeRevise(e, i) } />
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    propsValue: state.value,
    inputlist: state.inputlist
  }
};
const mapDispatchToProps = (dispatch) => {
  //console.log(dispatch)
  return {
    actions: bindActionCreators(actions, dispatch)
  }
};
//bindActionCreators: 作用是将单个或多个ActionCreator转化为dispatch(action)的函数集合形式

App = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
  <Provider store = { store }>
    <App />
  </Provider>,
  document.getElementById('root')
);