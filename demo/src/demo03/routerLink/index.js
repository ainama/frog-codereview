/* react-router第二种方式跳转 */

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PageThree from './pageThree';

class RouterPage extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to = '/pageThree/'>
                点击跳转到pageThree
              </Link>
            </li>
          </ul>
          <Route path = '/PageThree' component = { PageThree } />
        </div>
      </Router>
    );
  }
}

export default RouterPage;