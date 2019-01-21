/* react-router第一种方式跳转 */

import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import RouterHome from './routerHome';
import PageOne from './pageList/pageOne';
import PageTwo from './pageList/pageTwo';
import PageThree from './pageList/pageThree';

class RouterPage extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/' component={RouterHome} />
                    <Route path='/PageOne' component={PageOne} />
                    <Route path='/PageTwo' component={PageTwo} />
                    <Route path='/PageThree' component={PageThree} />
                </div>
            </Router>
        )
    }

}

export default RouterPage;

/* react-router第二种方式跳转 */

/* import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import PageThree from './pageList/pageThree';

class RouterPage extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to='/pageThree/'>
                                点击跳转到pageThree
                            </Link>
                        </li>
                    </ul>
                    <Route path='/PageThree' component={PageThree} />
                </div>
            </Router>
        );
    }
}

export default RouterPage; */

/* react-router第三种方式跳转(未研究出来，一直报错) */

/*
import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import RouterHome from './routerHome';
import PageOne from './pageList/pageOne';
import PageTwo from './pageList/pageTwo';
import PageThree from './pageList/pageThree';

class RouterPage extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={RouterHome} />
                <Route path='PageOne' component={PageOne} />
                <Route path='PageTwo' component={PageTwo} />
                <Route path='PageThree' component={PageThree} />
            </Router>
        );
    }
}

export default RouterPage;
*/

