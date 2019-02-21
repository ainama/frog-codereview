import React, { Component } from 'react';

import ModuleTag from './myTag.js';

export default class Page extends Component {
  constructor(props, context) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <ModuleTag
          tagText = 'tag'
          tagHover = { true }
          tagActive = { true }
          tagDisabled = { false }
          addTag = { true }
          addTagHover = { true }
          addTagActive = { true }
          addTagDisabled = { false }
        />
        <ModuleTag
          tagText = 'tag1'
          tagHover = { true }
          tagActive = { false }
          tagDisabled = { true }
          addTag = { true }
          addTagHover = { true }
          addTagActive = { true }
          addTagDisabled = { true }
        />
        <ModuleTag
          tagText = 'tag,tag1,tag2'
          tagHover = { true }
          tagActive = { true }
          tagDisabled = { false }
          addTag = { true }
          //addTagText = 'addtagtext'  //修改添加标签的文字
          addTagHover = { true }
          addTagActive = { true }
          addTagDisabled = { false }
          tagOnclik = { true }  //点击事件
          deleteTag = 'rightTop' // rightTop,rightCenter
        />
        <ModuleTag
          tagText = 'tag,tag1,tag2'
          tagHover = { true }
          tagActive = { true }
          tagDisabled = { false }
          addTag = { true }
          //addTagText = 'addtagtext'  //修改添加标签的文字
          addTagHover = { true }
          addTagActive = { true }
          addTagDisabled = { false }
          tagOnclik = { true }  //点击事件
          deleteTag = 'rightCenter' // rightTop,rightCenter
        />
        <ModuleTag
          tagText = 'tag,tag1,tag2'
          tagHover = { true }
          tagActive = { true }
          tagDisabled = { false }
          //size = 'default' //large, default,small
          tagColor = { {
            background: 'rgba(255,193,7,0.10)',
            border: '1px solid #ffdc72',
            boxShadow: '0 1px 2px 0 rgba(255,193,7,0.06)',
            borderRadius: '3px',
            color: '#ffc107',
          } }
          //tagStyleIndex = { 0 }  //tag下标
        />
        <ModuleTag
          tagText = 'tag,tag1,tag2'
          tagHover = { true }
          tagActive = { true }
          tagDisabled = { false }
          addTag = { true }
          //addTagText = 'addtag'  //修改添加标签的文字
          addTagHover = { true }
          addTagActive = { true }
          addTagDisabled = { false }
          tagOnclik = { true }  //点击事件
          deleteTag = 'rightTop' // rightTop,rightCenter
          tagRevise = { true }
          //size = 'default' //large, default,small
          tagColor = { {
            background: 'rgba(255,193,7,0.10)',
            border: '1px solid #ffdc72',
            boxShadow: '0 1px 2px 0 rgba(255,193,7,0.06)',
            borderRadius: '3px',
            color: '#ffc107',
          } }
          tagStyleIndex = { 0 }  //tag下标
          //tagStyle = 'leftRadius' //rightRadius，leftRadius,default,allRadius
        />
        <ModuleTag
          tagText = 'tag'
          tagHover = { true }
          tagActive = { true }
          tagDisabled = { false }
          tagStyle = 'rightRadius' //rightRadius，leftRadius,default,allRadius
        />
        <ModuleTag
          tagText = 'tag'
          tagHover = { true }
          tagActive = { true }
          tagDisabled = { false }
          tagStyle = 'default' //rightRadius，leftRadius,default,allRadius
        />
        <ModuleTag
          tagText = 'tag'
          tagHover = { true }
          tagActive = { true }
          tagDisabled = { false }
          tagStyle = 'allRadius' //rightRadius，leftRadius,default,allRadius
        />
      </div>
    )
  }
}

