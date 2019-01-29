import React from 'react';
import { Link } from 'react-router-dom';

class PageTwo extends React.Component {
  render() {
    return (
      <div>
        <div>This is PageTwo!</div>
        <div>
          <Link to = '/PageThree/'>点击跳转到PageThree</Link>
        </div>
      </div>
    );
  }
}

export default PageTwo;