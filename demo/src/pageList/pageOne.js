import React from 'react';
import { Link } from 'react-router-dom';

class PageOne extends React.Component {
  render() {
    return (
      <div>
        <div>This is PageOne!</div>
        <div>
          <Link to = "/PageTwo/">点击跳转到PageTwo</Link>
        </div>
      </div>
    );
  }
}

export default PageOne;