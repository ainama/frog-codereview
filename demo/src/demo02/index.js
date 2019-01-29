import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class SubComp extends React.Component {
  constructor(props) {
    console.log(props.order + 'constructor');
    super(props);
    this.state = {
      isUpdate: false
    }
  }

  componentWillMount() {
    console.log(this.props.order + 'componentWillMount');
  }

  componentDidMount() {
    console.log(this.props.order + ' componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props.order + ' componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.props.order + 'shouldComponentUpdate');
    return true
  }

  componentWillUpdate() {
    console.log(this.props.order + ' componentWillUpdate');
  }

  componentDidUpdate() {
    console.log(this.props.order + ' componentDidUpdate');
  }

  componentWillUnmount() {
    console.log(this.props.order + 'componentWillUnmount');
  }

  render() {
    console.log(this.props.order + 'render start');
    return (
      <button onClick = { () => {
        this.setState({ isUpdate: true })
      } }>
        { this.props.order + ' button updated? : ' + this.state.isUpdate }
        <br />
      </button>
    )
  }
}

//父组件
class SupComp extends React.Component {

  constructor(props) {
    console.log(props);
    console.log('constructor');

    super(props);
    this.state = {}
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMountd');
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return true
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    console.log('render start');
    return (
      <div>
        <SubComp order = 'child' />
        <br />
        <button onClick = { () => {
          this.forceUpdate()
        } }>
          force update
        </button>
      </div>
    )
  }
}

//组件默认状态
SupComp.defaultProps = {
  name: 'default name'
};

//属性类型检查
SupComp.propTypes = {
  name: PropTypes.string
};

ReactDOM.render(
  <SupComp />,
  document.getElementById('root')
);
