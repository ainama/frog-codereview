import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
// import App from "./App";
// ReactDOM.render(<App/>, document.getElementById('root'));


class SubComp extends React.Component {
    constructor(props) {
        console.log(props.order + "constructor");

        super(props);
        this.state = {
            isUpdate: false
        }
    }

    componentWillMount() {
        console.log(this.props.order + "componentWillMount");
    }

    componentDidMount() {
        console.log(this.props.order + ' componentDidMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);

        console.log(this.props.order + ' componentWillReceiveProps')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(this.props.order + "shouldComponentUpdate");
        return true
    }

    componentWillUpdate() {
        console.log(this.props.order + ' componentWillUpdate')
    }

    componentDidUpdate() {
        console.log(this.props.order + ' componentDidUpdate')
    }

    componentWillUnmount() {
        console.log(this.props.order + "componentWillUnmount")
    }

    render() {
        console.log(this.props.order + 'render start');
        return (
            <button onClick={() => {
                this.setState({isUpdate: true})
            }}>
                {this.props.order + ' button updated? : ' + this.state.isUpdate}
                <br/>
            </button>
        )
    }
}

//父组件
class SupComp extends React.Component {

    constructor(props) {
        console.log(props);
        console.log("constructor");

        super(props);
        this.state = {}
    }

    componentWillMount() {
        console.log("componentWillMount");
    }

    componentDidMount() {
        console.log('componentDidMountd')
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        console.log('componentWillReceiveProps')
    }

    shouldComponentUpdate(nextProps, nextState) {
        //console.log(nextProps, nextState);
        console.log("shouldComponentUpdate");
        return true
    }

    componentWillUpdate() {
        console.log('componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    render() {
        console.log('render start');
        return (
            <div>
                <SubComp order="child"/>
                <br/>
                <button onClick={() => {
                    this.forceUpdate()
                }}>force update
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
//定义一个属性是特定的JS类型（Array,Boolean,Function,Number,Object,String,Symbol）。默认情况下，这些都是可选的。
//指定类型为：任何可以被渲染的元素，包括数字，字符串，react 元素，数组，fragment。
//optionalNode: PropTypes.node,
// 指定类型为：一个react 元素
//optionalElement: PropTypes.element,
//你可以类型为某个类的实例，这里使用JS的instanceOf操作符实现
//optionalMessage: PropTypes.instanceOf(Message),

ReactDOM.render(
    <SupComp/>,
    document.getElementById('root')
);




















