import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import ModuleInput from './moduleInput.js';
import ModuleTag from './moduleTag.js';

import './sass/page.scss'

export default class Page extends Component {
  constructor(props, context) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div style = { { display: 'flex' } }>
          <div className = 'page-body'>
            <ul>
              <li><Link to = '/'>Input标签</Link></li>
              <li><Link to = '/myTag'>Tag标签</Link></li>
            </ul>
            <Route exact path = '/' render = { () => <div></div> } />
            <Route path = '/myTag' render = { () => <div></div> } />
          </div>
          <div className = 'page-all'>
            <div className = 'page-flex'></div>
            <Route exact path = '/' render = { () => <div><ModuleInput /></div> } />
            <Route path = '/myTag' render = { () => <div><ModuleTag /></div> } />
          </div>
        </div>
      </Router>
    )
  }
}

