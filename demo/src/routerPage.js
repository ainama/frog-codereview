/* react-router第一种方式跳转(页面跳转) */

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RouterHome from './routerHome';
import PageOne from './pageList/pageOne';
import PageTwo from './pageList/pageTwo';
import PageThree from './pageList/pageThree';

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


/* react-router第二种方式跳转 */

/* import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PageThree from './pageList/pageThree';

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

export default RouterPage; */


/* react-router第三种方式跳转(重定向) */

/* import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';

function RouterPage() {
  return (
    <Router>
      <div>
        <AuthButton />
        <ul>
          <li>
            <Link to = '/public'>Public Page</Link>
          </li>
          <li>
            <Link to = '/protected'>Protected Page</Link>
          </li>
        </ul>
        <Route path = '/public' component = { Public } />
        <Route path = '/login' component = { Login } />
        <PrivateRoute path = '/protected' component = { Protected } />
      </div>
    </Router>
  );
}

const fakeAuth = {
  isAuthenticated: false,

  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },

  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const AuthButton = withRouter(({ history }) =>(
    fakeAuth.isAuthenticated
      ? (<p>Welcome!{ ' ' }</p>)
      : (<p>You are not logged in.</p>)
));

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      { ...rest }
      render = {(props) =>(
        fakeAuth.isAuthenticated
          ? (<Component { ...props } />)
          : (<Redirect to={ { pathname: '/login', state: { from: props.location } } } />)
      ) }
    />
  );
}

function Public() {
  return <h3>Public</h3>;
}

function Protected() {
  return <h3>Protected</h3>;
}

class Login extends React.Component {
  state = { redirectToReferrer: false };

  login = () => {
    fakeAuth.authenticate(() => {
      let name = 'zhangsan';
      this.setState({ name });

      this.setState({
        redirectToReferrer: true
      });
    });
  };

  render() {
    let { from } = this.props.location.state || { from: { pathname: '/' } };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to = { from }/>;

    return (
      <div>
        <p>You must log in to view the page at { from.pathname }</p>
        <button onClick = { this.login }>Log in</button>
      </div>
    );
  }
}

export default RouterPage; */


/* react-router第四种方式跳转(递归路径) */

/* import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const PEEPS = [
  { id: 0, name: 'Michelle', friends: [1, 2, 3] },
  { id: 1, name: 'Sean', friends: [0, 3] },
  { id: 2, name: 'Kim', friends: [0, 1, 3] },
  { id: 3, name: 'David', friends: [1, 2] }
];

function find(id) {
  //console.log(id);
  return PEEPS.find(p => p.id == id);
}

function RouterPage() {
  return (
    <Router>
      <Person match = { { params: { id: 0 }, url: '' } } />
    </Router>
  );
}

function Person({ match }) {
  let person = find(match.params.id);
  return (
    <div>
      <h3>
        { person.name }
        ’s Friends
      </h3>
      <ul>
        { person.friends.map(id => (
          <li key = { id }>
            <Link to = { `${ match.url }/${ id }` }>{ find(id).name }</Link>
          </li>
        )) }
      </ul>
      <Route path = { `${ match.url }/:id` } component = { Person } />
    </div>
  );
}

export default RouterPage; */


/* react-router第五种方式跳转(选项卡) */

/* import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

function RouterPage() {
  return (
    <Router>
      <Route
        render = { ({ location }) => (
          <div style = { styles.fill }>
            <Route
              exact
              path = '/'
              render = { () => <Redirect to = '/hsl/10/90/50' /> }
            />

            <ul style={ styles.nav }>
              <NavLink to = '/hsl/10/90/50'>Red</NavLink>
              <NavLink to = '/hsl/120/100/40'>Green</NavLink>
              <NavLink to = '/rgb/33/150/243'>Blue</NavLink>
              <NavLink to = '/rgb/240/98/146'>Pink</NavLink>
            </ul>

            <div style = { styles.content }>
              <TransitionGroup>
                <CSSTransition
                  key = { location.key }
                  classNames = 'fade'
                  timeout = { 300 }
                >
                  <Switch location={ location }>
                    <Route exact path = '/hsl/:h/:s/:l' component = { HSL } />
                    <Route exact path = '/rgb/:r/:g/:b' component = { RGB } />
                    <Route render = { () => <div>Not Found</div> } />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </div>
          </div>
        ) }
      />
    </Router>
  );
}

function NavLink(props) {
  return (
    <li style = { styles.navItem }>
      <Link { ...props } style = { { color: 'inherit' } } />
    </li>
  );
}

function HSL({ match: { params } }) {
  return (
    <div
      style={ {
        ...styles.fill,
        ...styles.hsl,
        background: `hsl(${ params.h }, ${ params.s }%, ${ params.l }%)`
      } }
    >
      hsl(
      { params.h },
      { params.s }%,
      { params.l }%
      )
    </div>
  );
}

function RGB({ match: { params } }) {
  return (
    <div
      style = { {
        ...styles.fill,
        ...styles.rgb,
        background: `rgb(${ params.r }, ${ params.g }, ${ params.b })`
      } }
    >
      rgb(
      { params.r }, { params.g }, { params.b }
      )
    </div>
  );
}

const styles = {};

styles.fill = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};

styles.content = {
  ...styles.fill,
  top: '40px',
  height:'300px',
  textAlign: 'center'
};

styles.nav = {
  padding: 0,
  margin: 0,
  position: 'absolute',
  top: 0,
  height: '40px',
  width: '100%',
  display: 'flex'
};

styles.navItem = {
  textAlign: 'center',
  flex: 1,
  listStyleType: 'none',
  padding: '10px'
};

styles.hsl = {
  ...styles.fill,
  color: 'white',
  paddingTop: '20px',
  fontSize: '30px'
};

styles.rgb = {
  ...styles.fill,
  color: 'white',
  paddingTop: '20px',
  fontSize: '30px'
};

export default RouterPage; */
