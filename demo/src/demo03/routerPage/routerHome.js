import React from 'react';
import { Link } from 'react-router-dom';

class RouterHome extends React.Component {
  render() {
    return (
      <div>
        <div>This is RouterHome!</div>
        <div>
          <Link to = '/PageOne/'>点击</Link>
        </div>
      </div>
    );
  }
}

export default RouterHome;