import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>{ this.props.title }</div>
    )
  }
}

export default MyComponent