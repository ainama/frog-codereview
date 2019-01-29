import React, { Component } from 'react'
import CommentInput from './commentInput'
import CommentList from './commentList'
import './index.css'

class CommentApp extends Component {
  constructor() {
    super();
    this.state = {
      commentlist: []
    }
  }

  handleSubmitComment(comment) {
    //console.log(comment);
    if (!comment) {
      alert('请输入添加内容');
      return;
    }
    this.state.commentlist.push(comment);
    this.setState({
      commentlist: this.state.commentlist
    });
  }

  render() {
    return (
      <div className = 'comment-body'>
        <CommentInput onSubmit = { this.handleSubmitComment.bind(this) } />
        <CommentList commentlist = { this.state.commentlist } />
      </div>
    )
  }
}

export default CommentApp


