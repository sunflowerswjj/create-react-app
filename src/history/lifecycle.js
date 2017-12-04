import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

class ChildCounter extends React.Component{

    //组件将要接受的属性
    componentWillReceiveProps(){
        console.log("ChildCounter 1,组件将要接受的属性");
    }
    shouldComponentUpdate(props,state){
        console.log("ChildCounter 1,是否更新");
        if(props.number<3){
            return true
        }else {
            return false
        }
    }
    render(){
        return (
            <div style={{border:"1px solid green"}}>
                <p>{this.props.number}</p>
            </div>
        )
    }
}
class Counter extends React.Component{
    //默认属性
    static defaultProps={
        number:0
    }
    //属性检查器
    static propTypes={
        number:PropTypes.number.isRequired
    }
    //如果没有自定义状态或者其他私有属性，此构造函数可以不写
    constructor(props){
        super(props);
        //定义一个状态对象，状态的属性值来自于组件的属性
        this.state={number:this.props.number}
    }
    componentWillMount(){
        console.log("1,组件将要挂载");
    }
    handleClick=()=>{
        this.setState((prevState)=>({
            number:prevState.number+1
            })
        )
    }
    //状态发生改变时，组件是否更新取决于shouldComponent的返回值，它接收两个参数，prevProps(上一个属性对象），prevState(上一个状态对象)，返回true更新，false不更新
    shouldComponentUpdate(prevProps,prevState){
        console.log("4，询问组件是否更新");
        if(prevState.number<5){//如果新状态大于5不更新
            return true
        }else {
            return false
        }
    }
    componentWillUpdate(){//组件将要更新
        console.log("5,组件将要更新");
    }
    componentDidUpdate(){//组件更新完成
        console.log("6,组件更新完成");
    }
    render(){
        console.log("2,渲染render");
        return(
            <div style={{border:"1px solid red"}}>
                <p>{this.state.number}</p>
                <button onClick={this.handleClick}>+</button>
                <ChildCounter number={this.state.number} />
            </div>
        )
    }
    componentDidMount(){
        console.log("3,组件挂载完成后");
    }
}
ReactDOM.render(<Counter />,document.querySelector("#root"));

Math.random()
