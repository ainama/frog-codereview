import React, { Component } from 'react';
import MyComponent from './myComponent.js';

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
    const {
      type
    } = this.props;

    return (
      <div>
        <input
          type = { type }
          value = { this.state.inputvalue }
          onChange = { (e) => this._changevalue(e) } />
        <MyComponent title = { this.state.inputvalue } />
      </div>
    )
  }

}

export default App