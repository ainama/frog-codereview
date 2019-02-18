import React, { Component } from 'react';

import Input from "./myInput.js";

export default class Page extends Component {
  constructor(porps, context) {
    super(porps);
    this.state = {
      value: ''
    };
  }

  _handleInputname = (e) => {
    let _value = e.target.value;
    let pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？%]");
    let result = _value.match(pattern);
    if (result === null || result === 'null') {
      this.setState({
        wrongtext: false,
      })
    } else {
      this.setState({
        wrongtext: true,
      })
    }
    this.setState({
      value: _value
    })
  };

  _myFunction = (e) => {
    //console.log(e.target.value);
  };

  render() {
    let { value } = this.state;

    return (
      <div>
        <Input
          type = 'text'
          placeholder = 'Username' // input框默认内容
          defaultValue = 'hello'
          //onChange = { this._handleInputname }
          //value = { value }   //input 的value值
          onFocus = { true }
          //onInput = { this._myFunction }
          //inputWidth = '400px'
          //inputHeight = '50px'
          //maxLength = '10'  //字体限制字数
          round = { true }   //圆点
          title = '姓名'    //标题:默认左侧
          //layout   //布局标题位于上面
          normaltext = '请不要输入特殊字符' //正常提示文字:默认位于右侧
          //replaceNormaltext = '已输入特殊字符'
          //wrongtext = { this.state.wrongtext } //错误提示文字
          //normaltextBottom  //提示文字：位于下面
          //disabled   //禁止状态
          //pictureicon = 'iconleft'  //input框左侧按钮
          //leftIconUrl = { require('../img/finish.png') }
          //iconLeftStyle = '15px 15px'
          //pictureicon = 'iconright'  //input框左侧按钮
          //rightIconUrl = { require('../img/finish.png') }
          //iconRightStyle = '15px 15px'
          //rightButton = 'Submit'  //右侧button按钮
          //onSearch = { true }
        />
        <Input
          type = 'text'
          placeholder = 'Username' // input框默认内容
          //defaultValue = 'hello'
          //onChange = { this._handleInputname }
          //value = { value }   //input 的value值
          onFocus = { true }
          //onInput = { this._myFunction }
          //inputWidth = '400px'
          //inputHeight = '50px'
          maxLength = '10'  //字体限制字数
          round = { false }   //圆点
          title = '姓名'    //标题:默认左侧
          //layout   //布局标题位于上面
          normaltext = '请不要输入特殊字符' //正常提示文字:默认位于右侧
          replaceNormaltext = '已输入特殊字符'
          //wrongtext = { this.state.wrongtext } //错误提示文字
          normaltextBottom  //提示文字：位于下面
          //disabled   //禁止状态
          //pictureicon = 'iconleft'  //input框左侧按钮
          //leftIconUrl = { require('../img/finish.png') }
          //iconLeftStyle = '15px 15px'
          //pictureicon = 'iconright'  //input框左侧按钮
          //rightIconUrl = { require('../img/finish.png') }
          //iconRightStyle = '15px 15px'
          rightButton = 'Submit'  //右侧button按钮
          onSearch = { true }
        />
        <Input
          type = 'text'
          placeholder = 'Username' // input框默认内容
          //defaultValue = 'hello'
          onChange = { this._handleInputname }
          value = { value }   //input 的value值
          onFocus = { true }
          //onInput = { this._myFunction }
          //inputWidth = '400px'
          //inputHeight = '50px'
          maxLength = '10'  //字体限制字数
          round = { true }   //圆点
          title = '姓名'    //标题:默认左侧
          layout   //布局标题位于上面
          normaltext = '请不要输入特殊字符' //正常提示文字:默认位于右侧
          replaceNormaltext = '已输入特殊字符'
          wrongtext = { this.state.wrongtext } //错误提示文字
          //normaltextBottom  //提示文字：位于下面
          //disabled   //禁止状态
          //pictureicon = 'iconleft'  //input框左侧按钮
          //leftIconUrl = { require('../img/finish.png') }
          //iconLeftStyle = '15px 15px'
          //pictureicon = 'iconright'  //input框左侧按钮
          //rightIconUrl = { require('../img/finish.png') }
          //iconRightStyle = '15px 15px'
          //rightButton = 'Submit'  //右侧button按钮
          //onSearch = { true }
        />
        <Input
          type = 'text'
          placeholder = 'Username' // input框默认内容
          //defaultValue = 'hello'
          //onChange = { this._handleInputname }
          //value = { value }   //input 的value值
          onFocus = { true }
          //onInput = { this._myFunction }
          //inputWidth = '400px'
          //inputHeight = '50px'
          maxLength = '10'  //字体限制字数
          round = { false }   //圆点
          title = '姓名'    //标题:默认左侧
          layout   //布局标题位于上面
          normaltext = '请不要输入特殊字符' //正常提示文字:默认位于右侧
          //replaceNormaltext = '已输入特殊字符'
          //wrongtext = { this.state.wrongtext } //错误提示文字
          normaltextBottom  //提示文字：位于下面
          //disabled   //禁止状态
          //pictureicon = 'iconleft'  //input框左侧按钮
          //leftIconUrl = { require('../img/finish.png') }
          //iconLeftStyle = '15px 15px'
          //pictureicon = 'iconright'  //input框左侧按钮
          //rightIconUrl = { require('../img/finish.png') }
          //iconRightStyle = '15px 15px'
          rightButton = 'Submit'  //右侧button按钮
          onSearch = { true }
        />
        <Input
          type = 'text'
          placeholder = 'Username' // input框默认内容
          //defaultValue = 'hello'
          //onChange = { this._handleInputname }
          //value = { value }   //input 的value值
          onFocus = { true }
          //onInput = { this._myFunction }
          //inputWidth = '400px'
          //inputHeight = '50px'
          maxLength = '10'  //字体限制字数
          round = { true }   //圆点
          title = '姓名'    //标题:默认左侧
          //layout   //布局标题位于上面
          //normaltext = '请不要输入特殊字符' //正常提示文字:默认位于右侧
          //replaceNormaltext = '已输入特殊字符'
          //wrongtext = { this.state.wrongtext } //错误提示文字
          //normaltextBottom  //提示文字：位于下面
          //disabled   //禁止状态
          pictureicon = 'iconleft'  //input框左侧按钮
          //leftIconUrl = { require('../img/finish.png') }
          //iconLeftStyle = '15px 15px'
          //pictureicon = 'iconright'  //input框左侧按钮
          //rightIconUrl = { require('../img/finish.png') }
          //iconRightStyle = '15px 15px'
          rightButton = 'Submit'  //右侧button按钮
          onSearch = { true }
        />
        <Input
          type = 'text'
          placeholder = 'Username' // input框默认内容
          //defaultValue = 'hello'
          //onChange = { this._handleInputname }
          //value = { value }   //input 的value值
          onFocus = { true }
          //onInput = { this._myFunction }
          //inputWidth = '400px'
          //inputHeight = '50px'
          maxLength = '10'  //字体限制字数
          round = { true }   //圆点
          title = '姓名'    //标题:默认左侧
          layout   //布局标题位于上面
          //normaltext = '请不要输入特殊字符' //正常提示文字:默认位于右侧
          //replaceNormaltext = '已输入特殊字符'
          //wrongtext = { this.state.wrongtext } //错误提示文字
          //normaltextBottom  //提示文字：位于下面
          //disabled   //禁止状态
          //pictureicon = 'iconleft'  //input框左侧按钮
          //leftIconUrl = { require('../img/finish.png') }
          //iconLeftStyle = '15px 15px'
          pictureicon = 'iconright'  //input框左侧按钮
          //rightIconUrl = { require('../img/finish.png') }
          //iconRightStyle = '15px 15px'
          rightButton = 'Submit'  //右侧button按钮
          onSearch = { true }
        />
      </div>
    )
  }
}
