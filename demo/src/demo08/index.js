import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class UserGist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      lastGistUrl: ''
    };
  }

  render() {
    return (
      <div>
        { this.state.username } 搜素地址：
        <a href = { this.state.lastGistUrl } rel = 'nofollow'>{ this.state.lastGistUrl }</a>
      </div>
    );
  }

  componentDidMount() {
    var that = this;

    this.serverRequest = $.ajax({
      url: this.props.source,
      type: 'GET',
      dataType: 'jsonp',
      success: function (result) {
        console.log(result.data);
        var lastGist = result.data[0];

        that.setState({
          username: lastGist.owner.login,
          lastGistUrl: lastGist.html_url
        })
      }
    })
  }

  componentWillUnmount() {
    this.serverRequest.abort();//终止
  }
}

ReactDOM.render(
  <UserGist source = 'https://api.github.com/users/octocat/gists' />,
  document.getElementById('root')
);

