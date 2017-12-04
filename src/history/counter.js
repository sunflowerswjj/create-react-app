import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
/*1.组件的属性是由父组件传入的，状态的值是内部初始化
 * 2，组件的属性不能修改，状态的值是可以修改的，是可以改变的
 * 3，组件的属性值自己不能改，但是父组件可以改的
 * 4，组件的状态是内部初始化的，只能组件内部修改，外部是不能修改的。*/

/*1.组件的属性和状态都是当前组件数据源（单向数据流）
* 2，组件的属性是可以自上而下流动的。单向数据流，只能父传子，不能子传父和兄弟相传*/
class Counter extends React.Component{
    /*默认属性对象*/
    static defaultProps={
        number:5
    };
    static propTypes={
        number:PropTypes.number

    }
    constructor(props){
        super(props);
        this.state={number:props.number};
    }
    // handleClick(){
    //     console.log(this);//undefined
    // }

    handleClick=()=>{
        //为了提高性能，React可能会把多个setState调用合并成一个。如果方法中有多个setState，而且后一个state需要借助上一个state计算出来，就只能用函数参数
        // this.setState({number:this.state.number+1})
        // this.setState({number:this.state.number+1})
        // this.setState({number:this.state.number+1})
        this.setState((prevState)=>({number:prevState.number+1}));
    }
    render(){
        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={this.handleClick}>+</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter number={6} />,document.querySelector("#root"));