/* react-router第一种方式跳转(页面跳转) */

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RouterHome from './routerHome';
import PageOne from './pageOne';
import PageTwo from './pageTwo';
import PageThree from './pageThree';

class RouterPage extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path = '/' component = { RouterHome } />
          <Route path = '/PageOne' component = { PageOne } />
          <Route path = '/PageTwo' component = { PageTwo } />
          <Route path = '/PageThree' component = { PageThree } />
        </div>
      </Router>
    )
  }
}

export default RouterPage;