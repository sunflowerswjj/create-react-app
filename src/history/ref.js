import React,{Component} from "react";
import ReactDOM from "react-dom";
//非受控组件  输入框的值不收任何限制
//受控组件   输入框的值受value值控制
class From extends Component{
    constructor(){
        super();
        this.state={username:""};
    }
    handleChange=(event)=>{
        this.setState({username:event.target.value})
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state.username);
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.username} onChange={this.handleChange} required/>
                <input type="submit"/>
            </form>
        )
    }
}
ReactDOM.render(<From/>,document.querySelector("#root"));
