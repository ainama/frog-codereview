import React from 'react';
import ReactDOM from 'react-dom';
//有状态组件
/*

constructor() {
    super() // 必须在定义在内部state之前
}           // super指代父类实例，调用super继承父类的this对象

componentWillMount(){}    //组件即将加载componentWillMount在16.3.0被弃用但目前前依然可用，以下UNSAFE_开头的均同理
render(){}                //组件被渲染
componentDidMount(){}     //组件已加载

componentWillReceiveProps(nextProps){}            // 组件将要从父组件获得props
shouldComponentUpdate(nextProps, nextState){}     // 是否确认重新渲染组件
render() {}               // 重新渲染组件
componentWillUpdate(){}   // 组件将要更新
componentDidUpdate(){}    // 组价被更新

componentWillUnmount(){}  // 组件将要卸载


 */
//无状态组件
//无状态组件本质上就是一个函数，它没有this对象，没有state，没有生命周期等特性，
//子组件

class Hello extends React.Component {
    //初始化

    constructor(props) {
        super(props);
        //console.log(props.name);
        this.state = {name: 'hello word'};
        console.log("constructor");
        this.handcClickstate = this.handcClickstate.bind(this);
    }

    // getDefaultProps(){
    //     console.log("getDefaultProps");
    //
    // }
    // getInitialState(){
    //     console.log("getInitialState");
    //
    // }

    //组件初始化时只调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state。
    componentWillMount() {
        console.log("componentWillMount");
    }

    handcClickstate() {
        this.setState({
            name: 'hello you'
        })
    }

    handcClickProps() {
        // this.setState({
        //     name: 'hello my'
        // })
    }

    render() {
        console.log("render");

        return (
            <div>
                <div onClick={this.handcClickstate}>{"state:"}{this.state.name}</div>
                <div onClick={this.handcClickProps}>{"Props:"}{this.props.name}</div>
            </div>

        )
    }

    // 组件渲染之后调用，只调用一次。
    componentDidMount() {
        console.log("componentDidMount")
    }

    //更新

    // 组件初始化时不调用，组件接受新的props时调用。
    componentWillReceiveProps(nextprops) {
        console.log("componentWillReceiveProps")
    }

    // 组件接受新的state或者props时调用
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
        return true
    }

    // 组件初始化时不调用，只有在组件将要更新时才调用，此时可以修改state
    componentWillUpdate() {
        console.log("componentWillUpdate")
    }

    // 组件初始化时不调用，组件更新完成后调用，此时可以获取dom节点。
    componentDidUpdate() {
        console.log("componentDidUpdate")
    }

    //卸载
    // 组件将要卸载时调用，一些事件监听和定时器需要在此时清除。
    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    // componentDidCatch() {
    //     console.log("componentDidCatch")
    // }
}

ReactDOM.render(<Hello name="hello liucuiling"/>, document.getElementById('root'));