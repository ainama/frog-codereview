import React from 'react';
import { Link } from 'react-router-dom';
class Pagetwo extends React.Component{
    render(){
        return(
            <div>
                <div className="p1">This is Page2!</div>
                <div>
                    <Link to="/Pagethree/">点击跳转到Page3</Link>
                </div>
            </div>
        );
    }
}
export default Pagetwo;