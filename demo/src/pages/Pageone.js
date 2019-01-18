import React from 'react';
import { Link } from 'react-router-dom';
class PageOne extends React.Component{
    render(){
        return(
            <div>
                <div className="p1">This is Page1!</div>
                <div>
                    <Link to="/PageTwo/">点击跳转到Page2</Link>
                </div>
            </div>
        );
    }
    componentWillUnmount() {
        console.log("componentWillUnmount")
    }
}
export default PageOne;