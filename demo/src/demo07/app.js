import React, { Component } from 'react';
import MyContent from './myContent.js';

class App extends Component {
  constructor(props, context) {
    super(props);
    this.state = {
      inputvalue: '',
    };
  }

  _changevalue(e) {
    this.setState({
      inputvalue: e.target.value
    })
  }

  render() {
    const { type } = this.props;
    const { inputvalue } = this.state;

    return (
      <div>
        <input
          type = { type }
          value = { inputvalue }
          onChange = { (e) => this._changevalue(e) } />
        <MyContent title = { inputvalue } />
      </div>
    )
  }
}

export default App