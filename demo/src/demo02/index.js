import React from 'react';
import ReactDOM from 'react-dom';
//import PropTypes from 'prop-types';


//父组件
class SupComp extends React.Component {

  constructor(props) {
    console.log('constructor');
    super(props);
    this.state = {
      name: 'lihua'
    }
  }

  componentWillMount() {
    this.setState({
      name: 'hanmeimei'
    });
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMountd');
    // this.setState({
    //   name:'zhenghe'
    // })
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
    console.log('render');
    return (
      <div>
        <button onClick = { () => {
          this.forceUpdate()
        } }>
          {
            this.state.name
          }
        </button>
        <br />
        <SubCompchild order = 'child ' />
      </div>
    )
  }
}

//子组件；
class SubCompchild extends React.Component {
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
    //console.log(nextProps);
    console.log(this.props.order + ' componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState) {
    //console.log(nextProps);
    //console.log(nextState);
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
    console.log(this.props.order + 'render');
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

//组件默认状态
// SupComp.defaultProps = {
//   name: 'default name'
// };

//属性类型检查
// SupComp.propTypes = {
//   name: PropTypes.string
// };

ReactDOM.render(
  <SupComp />,
  document.getElementById('root')
);
