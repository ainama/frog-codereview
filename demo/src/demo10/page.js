import React, { Component } from 'react';

import ModuleInput from './module.js';
import ModuleTag from './myTag.js';

export default class Page extends Component {
  constructor(props, context) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <ModuleInput />
        <ModuleTag />
      </div>
    )
  }
}

