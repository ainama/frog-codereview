import React from 'react';
import './index.css'

class CommentInput extends React.Component {
  constructor() {
    super();
    this.state = {
      content: '',
    };
  }

  handlecontentChange(e) {
    this.setState({
      content: e.target.value
    })
  }

  handlecontentClick() {
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state.content);
    }
    this.setState({ content: '' })
  }

  render() {
    return (
      <div className = 'comment-input'>
        <div className = 'comment-field'>
          <span className = 'comment-field-name'>添加内容：</span>
          <div className = 'comment-field-input'>
            <input
              value = { this.state.content }
              onChange = { this.handlecontentChange.bind(this) } />
          </div>
        </div>
        <div className = 'comment-field-button'>
          <button onClick = { this.handlecontentClick.bind(this) }>
            保存
          </button>
        </div>
      </div>
    );

  }
}

export default CommentInput;
