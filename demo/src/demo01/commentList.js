import React, { Component } from 'react'
import imgURL from '../img/error.png';
import './index.css'

class CommentList extends Component {

  constructor() {
    super();
    this.state = {
      commentlist: []
    };
    //this.testClick = this.testClick.bind(this);
  }

  testClickimg(e) {
    this.props.commentlist.splice(e, 1);
    this.setState({
      commentlist: this.props.commentlist
    });

  }

  render() {
    const _this = this;
    return (

      <div>
        {
          this.props.commentlist.map(function (commentlist, i) {
            return (
              <div key = { i } className = 'commentlist'>
                { commentlist }
                <img src = { imgURL } alt = '' onClick = { () => _this.testClickimg(i) } />
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default CommentList
