import React from "react";
import ReactDOM from "react-dom";
class Panel extends  React.Component{

    render(){
        return(
           <ul>
               {//以免传进去的children是对象或者是undefined
                   React.Children.map(this.props.children,(item,index)=>(
                       <li key={index}>{item}</li>))
               }
           </ul>
        )
    }

}
ReactDOM.render(
    <Panel>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </Panel>,document.querySelector("#root"))
