import React, { Component } from 'react';

import ModuleTag from './myTag.js';

export default class Page extends Component {
  constructor(props, context) {
    super(props);
    this.state = {
      inputVisible: false
    };
  }

  _tagInput = () => {
    this.setState({
      inputVisible: true
    })

  }

  render() {
    let { inputVisible } = this.state;
    return (
      <div>
        <ModuleTag
          tagText = 'tag'
          tagHover = { true }
          tagActive = { true }
          tagDisabled = { false }
        />
        <ModuleTag
          //addTagText = 'addtag'
          addTagHover = { true }
          addTagActive = { true }
          addTagDisabled = { false }
          addTag = { true }
          tagOnclik = { this._tagInput }
          inputVisible = { inputVisible }
        />
      </div>
    )
  }
}

