import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
//import { BrowserRouter as Router,Route,withRouter,Switch} from 'react-router-dom';
// withRouter：把不是通过路由切换过来的组件中，将react-router 的 history、location、match 三个对象传入props对象上;
import Home from './Home';
import PageOne from './pages/Pageone';
import PageTwo from './pages/Pagetwo';
import PageThree from './pages/Pagethree';

class App extends React.Component {
    render(){
        return(
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/PageOne" component={PageOne} />
                    <Route path="/PageTwo" component={PageTwo} />
                    <Route path="/PageThree" component={PageThree} />
                </div>
            </Router>
        )
    }

}
export default App;
