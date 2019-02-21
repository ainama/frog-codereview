import React, { Component } from 'react';

import Input from './myInput.js';
import './sass/page.scss'

export default class Page extends Component {
  constructor(props, context) {
    super(props);
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
        <div className = 'input-body'>
          <div className = 'page'>
            <Input
              type = 'text'
              placeholder = 'Username'
              onFocus = { true }
            />
            <div className = 'margin-bottom'></div>
            <Input
              type = 'text'
              defaultValue = 'hello'
            />
            <div className = 'margin-bottom'></div>
            <Input
              type = 'text'
              disabled
            />
            <div className = 'margin-bottom'></div>
            <Input
              type = 'text'
              onFocus = { true }
              placeholder = 'Username'
              inputWidth = '300px'
              inputHeight = '40px'
            />
            <div className = 'present'>
              <p>基本使用</p>
              <div className = 'text-style'>
                <p>默认状态，有默认值defaultValue，禁止状态，可调节input宽高</p>
                <p>onFocus:获取焦点，boolean类型，默认为 false </p>
              </div>
            </div>
            <div className = 'present-color'>
              <div className = 'margin-bottom'>import Input from './myInput.js';</div>
              <div className = 'atuo'>
                ReactDOM.render(
                <p className = 'text-indent'>&lt;div></p>
                <div className = 'text-indent-next'>
                  <p>&lt;Input type = 'text' placeholder = 'Username' onFocus = { '{ true }' }' /> </p>
                  <p>&lt;Input type = 'text' defaultValue = 'hello' /></p>
                  <p>&lt;Input type = 'text' disabled /></p>
                  <p>&lt;Input </p>
                  <div className = 'text-indent-next-p'>
                    <p>type = 'text'</p>
                    <p>onFocus = { '{true}' }</p>
                    <p>placeholder = 'Username'</p>
                    <p>inputWidth = '300px'</p>
                    <p>inputHeight = '40px'</p>
                  </div>
                  <p>/></p>
                </div>
                <p className = 'text-indent'>&lt;/div>,</p>
                mountNode);
              </div>
            </div>
          </div>
          <div className = 'page'>
            <Input
              type = 'text'
              placeholder = 'Username'
              round = { true }
              title = '姓名'
              normaltext = '这是提示文字'
              onFocus = { true }
            />
            <div className = 'margin-bottom'></div>
            <Input
              type = 'text'
              placeholder = 'Username'
              onFocus = { true }
              round = { true }
              title = '姓名'
              normaltext = '这是提示文字'
              normaltextBottom
            />
            <div className = 'margin-bottom'></div>
            <div className = 'margin-bottom'></div>
            <Input
              type = 'text'
              placeholder = 'Username'
              onFocus = { true }
              round = { false }
              title = '姓名'
              normaltext = '这是提示文字'
              layout
            />
            <div className = 'margin-bottom'></div>

            <Input
              type = 'text'
              placeholder = 'Username'
              onFocus = { true }
              round = { true }
              title = '姓名'
              normaltext = '这是提示文字'
              layout
              normaltextBottom
            />
            <div className = 'present'>
              <p>基本使用</p>
              <div className = 'text-style'>
                <p>默认：横向排列</p>
                <p>normaltextBottom：normaltext纵向排列</p>
                <p>layout：title纵向排列</p>
                <p>round:小圆点 ，boolean类型，默认false</p>
              </div>
            </div>

            <div className = 'present-color'>
              <div className = 'margin-bottom'>import Input from './myInput.js';</div>
              <div className = 'atuo'>
                ReactDOM.render(
                <p className = 'text-indent'>&lt;div></p>
                <div className = 'text-indent-next'>
                  <div>
                    <p>&lt;Input</p>
                    <div className = 'text-indent-next-p'>
                      <p>type = 'text'</p>
                      <p>placeholder = 'Username'</p>
                      <p>round = { '{ true }' }</p>
                      <p>title = '姓名'<br /></p>
                      <p>normaltext = '这是提示文字'</p>
                    </div>
                    <p>/></p>
                  </div>
                  <div>
                    <p>&lt;Input</p>
                    <div className = 'text-indent-next-p'>
                      <p>type = 'text'</p>
                      <p>placeholder = 'Username'</p>
                      <p>round = { '{ true }' }</p>
                      <p>title = '姓名'<br /></p>
                      <p>normaltext = '这是提示文字'</p>
                      <p>normaltextBottom</p>
                    </div>
                    <p>/></p>
                  </div>
                  <div>
                    <p>&lt;Input</p>
                    <div className = 'text-indent-next-p'>
                      <p>type = 'text'</p>
                      <p>placeholder = 'Username'</p>
                      <p>round = { '{ false }' }</p>
                      <p>title = '姓名'<br /></p>
                      <p>normaltext = '这是提示文字'</p>
                      <p>layout</p>
                    </div>
                    <p>/></p>
                  </div>
                  <div>
                    <p>&lt;Input</p>
                    <div className = 'text-indent-next-p'>
                      <p>type = 'text'</p>
                      <p>placeholder = 'Username'</p>
                      <p>round = { '{ true }' }</p>
                      <p>title = '姓名'<br /></p>
                      <p>normaltext = '这是提示文字'</p>
                      <p>layout</p>
                      <p>normaltextBottom</p>
                    </div>
                    <p>/></p>
                  </div>
                </div>
                <p className = 'text-indent'>&lt;/div>,</p>
                mountNode);
              </div>
            </div>
          </div>
          <div className = 'page'>
            <Input
              type = 'text'
              placeholder = 'Username'
              round = { true }
              title = '姓名'
              onFocus = { true }
              onChange = { this._handleInputname }
              value = { value }
              normaltext = '这是提示文字'
              replaceNormaltext = '已输入特殊字符'
              wrongtext = { this.state.wrongtext }
            />
            <div className = 'present'>
              <p>基本使用</p>
              <div className = 'text-style'>
                <p>replaceNormaltext：提示文字的替换文本</p>
              </div>
            </div>
            <div className = 'present-color atuo'>
              <div className = 'margin-bottom'>import Input from './myInput.js';</div>
              <div>
                <p>export default class Page extends Component { '{' }  </p>
                <div className = 'text-indent'>
                  <p> constructor(props, context) { '{' }</p>
                  <div className = 'text-indent-next'>
                    <p> super(props);</p>
                    <p> this.state = { '{' } </p>
                    <p className = 'text-indent-next-p'> value: ''</p>
                    <p>};</p>
                  </div>
                  <p className = 'text-indent'>}</p>
                  <p>_handleInputname = (e) => { '{ ' }</p>
                  <div className = 'text-indent-next'>
                    <p>let _value = e.target.value;</p>
                    <p>let pattern = new
                      RegExp({ "[`~!@#$^&*()=|{ }':;',\\[\\].<>/?~！@#￥……&*（）——|{ }【】‘；：”“'。，、？%]" });</p>
                    <p>let result = _value.match(pattern);</p>
                    <p>if (result === null || result === 'null') { '{' }</p>
                    <div className = 'text-indent-next-p'>
                      <p>this.setState({ '{' }</p>
                      <p className = 'text-indent-next-four'>wrongtext: false,</p>
                      <p>})</p>
                    </div>
                    <p> } else { '{' }</p>
                    <div className = 'text-indent-next-p'>
                      <p> this.setState({ '{' }</p>
                      <p className = 'text-indent-next-four'> wrongtext: true,</p>
                      <p> })</p>
                    </div>
                    <p>}</p>
                    <p>this.setState({ '{' }</p>
                    <p className = 'text-indent-next-four'>value: _value</p>
                    <p>})</p>
                  </div>
                  <p>}；</p>
                  <p> render() { '{' }</p>
                  <div className = 'text-indent-next'>
                    <p>let { '{value}' } = this.state;</p>
                    <p>return (</p>
                    <p className = 'text-indent-next-p'>&lt;div></p>
                    <div className = 'text-indent-next padding-left'>
                      <p>&lt;Input</p>
                      <div className = 'text-indent-next-p'>
                        <p>type = 'text'</p>
                        <p>placeholder = 'Username'</p>
                        <p>round = { '{true}' }</p>
                        <p>title = '姓名'</p>
                        <p>onFocus = { '{true}' }</p>
                        <p>onChange = { '{ this._handleInputname}' }</p>
                        <p>value = { '{value}' }</p>
                        <p>normaltext = '这是提示文字'</p>
                        <p>replaceNormaltext = '已输入特殊字符'</p>
                        <p>wrongtext = { '{ this.state.wrongtext }' }</p>
                      </div>
                      <p>/></p>
                    </div>
                    <p className = 'text-indent-next-p'>&lt;/div>,</p>
                    <p>)</p>
                  </div>
                </div>
                <p>}</p>
              </div>
              <p>ReactDOM.render(&lt;Page />mountNode);</p>
            </div>
          </div>
          <div className = 'page'>
            <Input
              type = 'text'
              placeholder = 'Username'
              rightButton = 'Submit'
              onSearch = { true }
            />
            <div className = 'present'>
              <p>基本使用</p>
              <div className = 'text-style'>
                <p>rightButton：button按钮</p>
                <p>onSearch：点击事件获取input焦点</p>
              </div>
            </div>
            <div className = 'present-color'>
              <div className = 'margin-bottom'>import Input from './myInput.js';</div>
              <div className = 'atuo'>
                ReactDOM.render(
                <p className = 'text-indent'>&lt;div></p>
                <div className = 'text-indent-next'>
                  <div>
                    <p>&lt;Input</p>
                    <div className = 'text-indent-next-p'>
                      <p>type = 'text'</p>
                      <p>placeholder = 'Username'</p>
                      <p>rightButton = 'Submit'</p>
                      <p>onSearch = { '{ true }' }</p>
                    </div>
                    <p>/></p>
                  </div>
                </div>
                <p className = 'text-indent'>&lt;/div>,</p>
                mountNode);
              </div>

            </div>
          </div>
          <div className = 'page'>
            <Input
              type = 'text'
              placeholder = 'Username'
              maxLength = { 10 }
              onFocus = { true }
              pictureicon = 'iconleft'
            />
            <div className = 'margin-bottom'></div>
            <Input
              type = 'text'
              placeholder = 'Enter your user name'
              maxLength = { 10 }
              pictureicon = 'iconleft'
              leftIconUrl = { require('../img/person_picture.svg') }
              iconLeftStyle = '15px 15px'
            />
            <div className = 'margin-bottom'></div>
            <Input
              type = 'text'
              placeholder = 'Username'
              pictureicon = 'iconright'
              rightIconUrl = { require('../img/search.svg') }
              iconRightStyle = '18px 18px'
            />
            <div className = 'present'>
              <p>基本使用</p>
              <div className = 'text-style'>
                <p>pictureicon：图片位置</p>
                <p>rightIconUrl：更改图片路径</p>
                <p>iconRightStyle：更改图片大小</p>
              </div>
            </div>
            <div className = 'present-color'>
              <div className = 'margin-bottom'>import Input from './myInput.js';</div>
              <div className = 'atuo'>
                ReactDOM.render(
                <p className = 'text-indent'>&lt;div></p>
                <div className = 'text-indent-next'>
                  <div>
                    <p>&lt;Input</p>
                    <div className = 'text-indent-next-p'>
                      <p>type = 'text'</p>
                      <p>maxLength = { '{10}' }</p>
                      <p>placeholder = 'Username'</p>
                      <p>onFocus = { '{true}' }</p>
                      <p>pictureicon = 'iconleft'</p>
                    </div>
                    <p>/></p>
                  </div>
                  <div>
                    <p>&lt;Input</p>
                    <div className = 'text-indent-next-p'>
                      <p>type = 'text'</p>
                      <p>maxLength = { '{10}' }</p>
                      <p>placeholder = 'Enter your user name'</p>
                      <p>pictureicon = 'iconleft'</p>
                      <p>leftIconUrl = { '{require("../img/person_picture.svg") }' }</p>
                      <p>iconLeftStyle = '15px 15px'</p>
                    </div>
                    <p>/></p>
                  </div>
                  <div>
                    <p>&lt;Input</p>
                    <div className = 'text-indent-next-p'>
                      <p>type = 'text'</p>
                      <p>placeholder = 'Username'</p>
                      <p>pictureicon = 'iconright'</p>
                      <p>rightIconUrl = { '{require("../img/search.svg") }' }</p>
                      <p>iconRightStyle = '18px 18px'</p>
                    </div>
                    <p>/></p>
                  </div>
                </div>
                <p className = 'text-indent'>&lt;/div>,</p>
                mountNode);
              </div>

            </div>
          </div>
        </div>
        <div className = 'body-table'>
          <table border = "0" className = 'table-style'>
            <tbody className = 'table-style-tr'>
            <tr>
              <th>参数</th>
              <th>说明</th>
              <th>类型</th>
              <th>默认值</th>
            </tr>
            <tr>
              <td>type</td>
              <td>type类型</td>
              <td>string</td>
              <td></td>
            </tr>
            <tr>
              <td>placeholder</td>
              <td>input默认提示信息</td>
              <td>string</td>
              <td></td>
            </tr>
            <tr>
              <td>defaultValue</td>
              <td>input默认值</td>
              <td>string</td>
              <td></td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>禁止状态，默认：false</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>change事件</td>
              <td>function</td>
              <td></td>
            </tr>
            <tr>
              <td>value</td>
              <td>input的value值</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>inputWidth</td>
              <td>更改input的宽</td>
              <td>string</td>
              <td></td>
            </tr>
            <tr>
              <td>inputHeight</td>
              <td>更改input的高</td>
              <td>string</td>
              <td></td>
            </tr>
            <tr>
              <td>onFocus</td>
              <td>获取焦点:默认为 false</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>maxLength</td>
              <td>input限制最长字数</td>
              <td>number</td>
              <td></td>
            </tr>
            <tr>
              <td>round</td>
              <td>小圆点：默认为 false</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>title</td>
              <td>标题</td>
              <td>string</td>
              <td></td>
            </tr>
            <tr>
              <td>normaltext</td>
              <td>提示文字</td>
              <td>string</td>
              <td></td>
            </tr>
            <tr>
              <td>replaceNormaltext</td>
              <td>错误提示文字</td>
              <td>string</td>
              <td></td>
            </tr>
            <tr>
              <td>wrongtext</td>
              <td>默认：false</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>layout</td>
              <td>标题位置：默认为 false</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>normaltextBottom</td>
              <td>提示文字位置</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>rightButton</td>
              <td>button按钮</td>
              <td>string</td>
              <td></td>
            </tr>
            <tr>
              <td>onSearch</td>
              <td>获取input焦点</td>
              <td>boolean</td>
              <td>false</td>
            </tr>

            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

