import React, { Component } from 'react';

class Input extends Component {
  constructor(porps, context) {
    super(porps);
    console.log(porps);
    this.state = {
      focus: true
    }
  }

  _handleJudgement(e) {
    let _value = e.target.value;
    var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？%]");
    var result = _value.match(pattern);
    this.setState({
      focus: !result
    })
  }

  render() {
    const {
      focus
    } = this.state;
    const {
      type
    } = this.props;
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
              onChange = { (e) => this._handleJudgement(e) } />
          </div>
          <div className = { `pointout pointout-right ${ focus ? "normal" : "wrong" }` }>这是提示文字</div>
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
              onChange = { (e) => this._handleJudgement(e) } />
            <div className = { `pointout pointout-position ${ focus ? "normal" : "wrong" }` }>这是提示文字</div>
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
              onChange = { (e) => this._handleJudgement(e) } />
          </div>
          <div className = { `pointout pointout-bottom ${ focus ? "normal" : "wrong" }` }>这是提示文字</div>
        </div>
      </div>
    )
  }
}

export default Input;