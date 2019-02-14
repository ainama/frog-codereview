import React, { Component } from 'react';

import Input from "./myInput.js";

export default class Page extends Component {
  constructor(porps, context) {
    super(porps);
    this.state = {};
  }

  _handleInputname = (e) => {
    let _value = e.target.value;
    let pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？%]");
    let result = _value.match(pattern);
    this.setState({
      wrongtext: result
    })
  };

  render() {
    return (
      <div>
        <Input
          type = 'text'
          placeholder = 'Username' // input框默认内容
          maxLength = '10'  //字体限制字数
          //round = { this.props.round }   //圆点
          title = '姓名'    //标题:默认左侧
          //layout   //布局标题位于上面
          normaltext = '这是提示文字' //正常提示文字:默认位于右侧
          //normaltextBottom  //提示文字：位于下面
          onChange = { this._handleInputname }
          wrongtext = { this.state.wrongtext } //错误提示文字
          //disabled   //禁止状态
          //pictureicon='iconleft'  //input框左侧按钮
          //pictureicon = 'iconright'  //inout右侧按钮
          //rightButton = 'Sumbit'  //右侧button按钮
        />
      </div>
    )
  }
}
Page.defaultProps = {
  round: false
};