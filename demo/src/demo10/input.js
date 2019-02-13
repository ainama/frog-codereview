import React, { Component } from 'react';

class Input extends Component {
  constructor(porps, context) {
    super(porps);
    console.log(porps);
    this.state = {
      focus: true
    }
  }

  _handleInputname(e) {
    let _value = e.target.value;
    let pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？%]");
    let result = _value.match(pattern);
    this.setState({
      focus: !result
    })
  }

  render() {
    const { focus } = this.state;
    const { type } = this.props;

    return (
      <div>

        {/*横向排列*/ }

        <div className = 'box box-row'>
          <div className = 'round'></div>
          <div className = 'textname textname-left'>姓名</div>
          <div className = { focus ? 'inputstyle' : 'wronginputstyle' }>
            <input
              type = { type }
              placeholder = 'Username'
              maxLength = '10'
              onChange = { (e) => this._handleInputname(e) } />
          </div>
          <div className = { `pointout pointout-right ${ focus ? 'normal' : 'wrong' }` }>这是提示文字</div>
        </div>

        {/*横向排列，文字方向不同*/ }

        <div className = 'box box-row'>
          <div className = 'round'></div>
          <div className = 'textname textname-left'>姓名</div>
          <div className = { focus ? 'inputstyle' : 'wronginputstyle' }>
            <input
              type = { type }
              placeholder = 'Username'
              maxLength = '10'
              onChange = { (e) => this._handleInputname(e) } />
            <div className = { `pointout pointout-position-bottom ${ focus ? 'normal' : 'wrong' }` }>这是提示文字</div>
          </div>
        </div>

        {/*纵向排列*/ }

        <div className = 'box box-column'>
          <div className = 'textname textname-top'>姓名</div>
          <div className = { focus ? 'inputstyle' : 'wronginputstyle' }>
            <input
              type = { type }
              placeholder = 'Username'
              maxLength = '10'
              onChange = { (e) => this._handleInputname(e) } />
          </div>
          <div className = { `pointout pointout-bottom ${ focus ? 'normal' : 'wrong' }` }>这是提示文字</div>
        </div>

        {/*纵向排列 提示文字在右侧*/ }

        <div className = 'box box-column'>
          <div className = 'textname textname-top'>姓名</div>
          <div className = { focus ? 'inputstyle' : 'wronginputstyle' }>
            <input
              type = { type }
              placeholder = 'Username'
              maxLength = '10'
              onChange = { (e) => this._handleInputname(e) } />
            <div className = { `pointout pointout-positiot-right ${ focus ? 'normal' : 'wrong' }` }>这是提示文字</div>
          </div>
        </div>
        {/*input点击button按钮样式*/ }

        <div className = 'box box-row'>
          <div className = { focus ? 'inputstyle' : 'wronginputstyle' }>
            <input
              className = 'input-border-right'
              type = { type }
              placeholder = 'Username'
              maxLength = '10'
              onChange = { (e) => this._handleInputname(e) } />
          </div>
          <button className = 'button-submit'>Submit</button>
        </div>

        {/*input框里面图标样式： 左侧*/ }

        <div className = 'box box-row'>
          <div className = 'personurl personurl-left'>
            <input
              type = { type }
              placeholder = 'Enter your user name'
              onChange = { (e) => this._handleInputname(e) } />
          </div>
        </div>
        {/*input框里面图标样式： 右侧*/ }

        <div className = 'box box-row'>
          <div className = 'personurl personurl-right'>
            <input
              type = { type }
              placeholder = 'input search text'
              onChange = { (e) => this._handleInputname(e) } />
          </div>
        </div>

        {/*禁止状态*/ }

        <div className = 'box box-row'>
          <div className = { focus ? 'inputstyle' : 'wronginputstyle' }>
            <input
              className = 'input-disabled'
              type = { type }
              disabled = 'disabled'
            />
          </div>
        </div>

      </div>
    )
  }
}

export default Input;