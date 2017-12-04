import React,{Component} from "react";
import ReactDOM from "react-dom";
//非受控组件  输入框的值不收任何限制
//受控组件   输入框的值受value值控制
class From extends Component{
    constructor(){
        super();
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(this.username.value);
    }
    render(){
        //当DOM元素转成真实的DOM元素插入容器中时执行ref函数
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" ref={input=>{
                    this.username=input
                }} required/>
                <input type="submit"/>
            </form>
        )
    }
}
ReactDOM.render(<From/>,document.querySelector("#root"));
