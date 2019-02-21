import React, { Component } from 'react';
import ModuleTag from './myTag.js';

import './sass/page.scss'

export default class Page extends Component {
  constructor(props, context) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div>
        <div className = 'input-body'>
          <div className = 'page'>
            <ModuleTag
              tagText = 'tag,tag1'
              tagHover = { true }
              tagActive = { true }
              addTag = { true }
              addTagHover = { true }
              addTagActive = { true }
            />
            <ModuleTag
              tagText = 'tag'
              tagDisabled = { true }
              addTag = { true }
              addTagDisabled = { true }
            />
            <ModuleTag
              addTag = { true }
              addTagHover = { true }
              addTagActive = { true }
              addTagText = 'AddTag'
            />
            <div className = 'present'>
              <p>基本使用</p>
              <div className = 'text-style'>
                <p>默认状态，鼠标滑过，点击态，禁止态</p>
              </div>
            </div>
            <div className = 'present-color'>
              <div className = 'margin-bottom'>import ModuleTag from './myTag.js';</div>
              <div className = 'atuo'>
                ReactDOM.render(
                <p className = 'text-indent'>&lt;div></p>
                <div className = 'text-indent-next'>
                  <p>&lt;ModuleTag </p>
                  <div className = 'text-indent-next-p'>
                    <p>tagText = 'tag,tag1'</p>
                    <p>tagHover = { '{true}' }</p>
                    <p>tagActive = { '{true}' }</p>
                    <p>addTag = { '{true}' }</p>
                    <p>addTagHover = { '{true}' }</p>
                    <p>addTagActive = { '{true}' }</p>
                  </div>
                  <p>/></p>
                </div>
                <div className = 'text-indent-next'>
                  <p>&lt;ModuleTag </p>
                  <div className = 'text-indent-next-p'>
                    <p>tagText = 'tag'</p>
                    <p>tagDisabled = { '{true}' }</p>
                    <p>addTag = { '{true}' }</p>
                    <p>addTagDisabled = { '{true}' }</p>
                  </div>
                  <p>/></p>
                </div>
                <div className = 'text-indent-next'>
                  <p>&lt;ModuleTag </p>
                  <div className = 'text-indent-next-p'>
                    <p>addTag = { '{true}' }</p>
                    <p>addTagHover = { '{true}' }</p>
                    <p>addTagActive = { '{true}' }</p>
                    <p>addTagText = 'AddTag'</p>
                  </div>
                  <p>/></p>
                </div>
                <p className = 'text-indent'>&lt;/div>,</p>
                mountNode);
              </div>
            </div>
          </div>
          <div className = 'page'>
            <ModuleTag
              tagText = 'tag,tag1,tag2'
              tagHover = { true }
              tagActive = { true }
              addTag = { true }
              addTagHover = { true }
              addTagActive = { true }
              tagOnclik = { true }
            />
            <ModuleTag
              tagText = 'tag,tag1,tag2'
              tagHover = { true }
              tagActive = { true }
              addTag = { true }
              addTagHover = { true }
              addTagActive = { true }
              tagOnclik = { true }
              deleteTag = 'rightTop' // rightTop,rightCenter
            />
            <ModuleTag
              tagText = 'tag,tag1,tag2'
              tagHover = { true }
              tagActive = { true }
              addTag = { true }
              addTagHover = { true }
              addTagActive = { true }
              tagOnclik = { true }
              deleteTag = 'rightCenter' // rightTop,rightCenter
            />
            <ModuleTag
              tagText = 'tag,tag1,tag2'
              tagHover = { true }
              tagActive = { true }
              addTag = { true }
              addTagHover = { true }
              addTagActive = { true }
              tagOnclik = { true }
              deleteTag = 'rightTop' // rightTop,rightCenter
              tagRevise = { true }
              tagColor = { {
                background: 'rgba(255,193,7,0.10)',
                border: '1px solid #ffdc72',
                boxShadow: '0 1px 2px 0 rgba(255,193,7,0.06)',
                borderRadius: '3px',
                color: '#ffc107',
              } }
              tagStyleIndex = { 0 }  //tag下标
            />
            <div className = 'present'>
              <p>基本使用</p>
              <div className = 'text-style'>
                <p>tag可操作类标签：新增，删除，修改</p>
              </div>
            </div>
            <div className = 'present-color'>
              <div className = 'margin-bottom'>import ModuleTag from './myTag.js';</div>
              <div className = 'atuo'>
                ReactDOM.render(
                <p className = 'text-indent'>&lt;div></p>
                <div className = 'text-indent-next'>
                  <div>
                    <p>&lt;ModuleTag</p>
                    <div className = 'text-indent-next-p'>
                      <p>tagText = 'tag,tag1,tag2'</p>
                      <p>tagHover = { '{true}' }</p>
                      <p>tagActive = { '{true}' }</p>
                      <p>addTag = { '{true}' }</p>
                      <p>addTagHover = { '{true}' }</p>
                      <p>addTagActive = { '{true}' }</p>
                      <p>tagOnclik = { '{true}' }</p>
                    </div>
                    <p>/></p>
                  </div>
                  <div>
                    <p>&lt;ModuleTag</p>
                    <div className = 'text-indent-next-p'>
                      <p>tagText = 'tag,tag1,tag2'</p>
                      <p>tagHover = { '{true}' }</p>
                      <p>tagActive = { '{true}' }</p>
                      <p>addTag = { '{true}' }</p>
                      <p>addTagHover = { '{true}' }</p>
                      <p>addTagActive = { '{true}' }</p>
                      <p>tagOnclik = { '{true}' }</p>
                      <p>deleteTag = 'rightTop'</p>
                    </div>
                    <p>/></p>
                  </div>
                  <div>
                    <p>&lt;ModuleTag</p>
                    <div className = 'text-indent-next-p'>
                      <p>tagText = 'tag,tag1,tag2'</p>
                      <p>tagHover = { '{true}' }</p>
                      <p>tagActive = { '{true}' }</p>
                      <p>addTag = { '{true}' }</p>
                      <p>addTagHover = { '{true}' }</p>
                      <p>addTagActive = { '{true}' }</p>
                      <p>tagOnclik = { '{true}' }</p>
                      <p>deleteTag = 'rightCenter'</p>
                    </div>
                    <p>/></p>
                  </div>
                  <div>
                    <p>&lt;ModuleTag</p>
                    <div className = 'text-indent-next-p'>
                      <p>tagText = 'tag,tag1,tag2'</p>
                      <p>tagHover = { '{true}' }</p>
                      <p>tagActive = { '{true}' }</p>
                      <p>addTag = { '{true}' }</p>
                      <p>addTagHover = { '{true}' }</p>
                      <p>addTagActive = { '{true}' }</p>
                      <p>tagOnclik = { '{true}' }</p>
                      <p>tagRevise = { '{true}' }</p>
                      <p>tagColor = "
                        background: 'rgba(255,193,7,0.10)',
                        border: '1px solid #ffdc72',
                        boxShadow: '0 1px 2px 0 rgba(255,193,7,0.06)',
                        borderRadius: '3px',
                        color: '#ffc107',
                        "
                      </p>
                      <p>tagStyleIndex = { '{0}' } </p>
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
            <ModuleTag
              tagText = 'tag'
              tagHover = { true }
              tagActive = { true }
              size = 'large' //large, default,small
            />
            <ModuleTag
              tagText = 'tag'
              tagHover = { true }
              tagActive = { true }
              size = 'default' //large, default,small
            />
            <ModuleTag
              tagText = 'tag'
              tagHover = { true }
              tagActive = { true }
              size = 'small' //large, default,small
            />

            <div className = 'present'>
              <p>基本使用</p>
              <div className = 'text-style'>
                <p>tag标签尺寸：large，default，small</p>
              </div>
            </div>
            <div className = 'present-color atuo'>
              <div className = 'margin-bottom'>import ModuleTag from './myTag.js';</div>
              <div className = 'atuo'>
                ReactDOM.render(
                <p className = 'text-indent'>&lt;div></p>
                <div className = 'text-indent-next'>
                  <div>
                    <p>&lt;ModuleTag</p>
                    <div className = 'text-indent-next-p'>
                      <p>tagText = 'tag'</p>
                      <p>tagHover = { '{true}' }</p>
                      <p>tagActive = { '{true}' }</p>
                      <p>size = 'large'</p>
                    </div>
                    <p>/></p>
                  </div>
                  <div>
                    <p>&lt;ModuleTag</p>
                    <div className = 'text-indent-next-p'>
                      <p>tagText = 'tag'</p>
                      <p>tagHover = { '{true}' }</p>
                      <p>tagActive = { '{true}' }</p>
                      <p>size = 'default'</p>
                    </div>
                    <p>/></p>
                  </div>
                  <div>
                    <p>&lt;ModuleTag</p>
                    <div className = 'text-indent-next-p'>
                      <p>tagText = 'tag'</p>
                      <p>tagHover = { '{true}' }</p>
                      <p>tagActive = { '{true}' }</p>
                      <p>size = 'small'</p>
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
            <ModuleTag
              tagText = 'tag,tag1,tag2'
              tagColor = { {
                background: 'rgba(255,193,7,0.10)',
                border: '1px solid #ffdc72',
                boxShadow: '0 1px 2px 0 rgba(255,193,7,0.06)',
                borderRadius: '3px',
                color: '#ffc107',
              } }
            />
            <ModuleTag
              tagText = 'tag,tag1,tag2'
              tagColor = { {
                background: 'rgba(255,193,7,0.10)',
                border: '1px solid #ffdc72',
                boxShadow: '0 1px 2px 0 rgba(255,193,7,0.06)',
                borderRadius: '3px',
                color: '#ffc107',
              } }
              tagStyleIndex = { 0 }  //tag下标
            />
            <div className = 'present'>
              <p>基本使用</p>
              <div className = 'text-style'>
                <p>tag标签颜色</p>
                <p>tagStyleIndex:单独设置tag标签颜色</p>
              </div>
            </div>
            <div className = 'present-color'>
              <div className = 'margin-bottom'>import ModuleTag from './myTag.js';</div>
              <div className = 'atuo'>
                ReactDOM.render(
                <p className = 'text-indent'>&lt;div></p>
                <div className = 'text-indent-next'>
                  <div>
                    <p>&lt;ModuleTag</p>
                    <div className = 'text-indent-next-p'>
                      <p>tagText = 'tag,tag1,tag2'</p>
                      <p>tagColor = "
                        background: 'rgba(255,193,7,0.10)',
                        border: '1px solid #ffdc72',
                        boxShadow: '0 1px 2px 0 rgba(255,193,7,0.06)',
                        borderRadius: '3px',
                        color: '#ffc107',
                        "
                      </p>
                    </div>
                    <p>/></p>
                  </div>
                  <div>
                    <p>&lt;ModuleTag</p>
                    <div className = 'text-indent-next-p'>
                      <p>tagText = 'tag,tag1,tag2'</p>
                      <p>tagColor = "
                        background: 'rgba(255,193,7,0.10)',
                        border: '1px solid #ffdc72',
                        boxShadow: '0 1px 2px 0 rgba(255,193,7,0.06)',
                        borderRadius: '3px',
                        color: '#ffc107',
                        "
                      </p>
                      <p>tagStyleIndex = { '{0}' } </p>
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
            <ModuleTag
              tagText = 'tag'
              tagStyle = 'rightRadius' //rightRadius，leftRadius,default,allRadius
            />
            <ModuleTag
              tagText = 'tag'
              tagStyle = 'default' //rightRadius，leftRadius,default,allRadius
            />
            <ModuleTag
              tagText = 'tag'
              tagStyle = 'allRadius' //rightRadius，leftRadius,default,allRadius
            />
            <div className = 'present'>
              <p>基本使用</p>
              <div className = 'text-style'>
                <p>tag展示类标签</p>
                <p>tagStyle：rightRadius，default，allRadius</p>
              </div>
            </div>
            <div className = 'present-color'>
              <div className = 'margin-bottom'>import ModuleTag from './myTag.js';</div>
              <div className = 'atuo'>
                ReactDOM.render(
                <p className = 'text-indent'>&lt;div></p>
                <div className = 'text-indent-next'>
                  <div>
                    <p>&lt;ModuleTag</p>
                    <div className = 'text-indent-next-p'>
                      <p>tagText = 'tag'</p>
                      <p>tagStyle = 'rightRadius'</p>
                    </div>
                    <p>/></p>
                  </div>
                  <div>
                    <p>&lt;ModuleTag</p>
                    <div className = 'text-indent-next-p'>
                      <p>tagText = 'tag'</p>
                      <p>tagStyle = 'default'</p>
                    </div>
                    <p>/></p>
                  </div>
                  <div>
                    <p>&lt;ModuleTag</p>
                    <div className = 'text-indent-next-p'>
                      <p>tagText = 'tag'</p>
                      <p>tagStyle = 'allRadius'</p>
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
              <td>Tagtext</td>
              <td>tag标签文本</td>
              <td>string</td>
              <td></td>
            </tr>
            <tr>
              <td>taghover</td>
              <td>tag标签鼠标经过态，默认：false</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>tagActive</td>
              <td>tag标签点击态，默认：false</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>tagDisabled</td>
              <td>tag标签禁止状态，默认：false</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>addTag</td>
              <td>添加标签的是否显示，默认：false</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>addTagText</td>
              <td>tag添加标签文本</td>
              <td>string</td>
              <td></td>
            </tr>
            <tr>
              <td>addTagHover</td>
              <td>tag添加标签鼠标经过态，默认：false</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>addTagActive</td>
              <td>tag添加标签点击态，默认：false</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>addTagDisabled</td>
              <td>tag添加标签禁止状态，默认：false</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>tagOnclik</td>
              <td>tag添加标签：添加内容，默认：false</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>deleteTag</td>
              <td>tag标签删除：rightTop,rightCenter</td>
              <td>string</td>
              <td></td>
            </tr>
            <tr>
              <td>tagRevise</td>
              <td>tag标签修改</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>size</td>
              <td>tag标签大小：large, default,small</td>
              <td>string</td>
              <td></td>
            </tr>
            <tr>
              <td>tagColor</td>
              <td>tag标签样式</td>
              <td>string</td>
              <td></td>
            </tr>
            <tr>
              <td>tagStyleIndex</td>
              <td>更改tag样式的下标</td>
              <td>number</td>
              <td></td>
            </tr>
            <tr>
              <td>tagStyle</td>
              <td>标签展示：rightRadius,default,allRadius</td>
              <td>string</td>
              <td></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

