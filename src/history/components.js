import React from "react";
import ReactDOM from "react-dom";
//函数式组件接收一个props对象

/*1,组件的名称首字母必须大写
* 因为组件是渲染返回值，而React元素是直接渲染，所以render只能通过首字母来判断
* 2，组件函数的返回值只能返回一个顶级React元素
* 3,传给组件的属性会全部封装到对象里作为实参传给组件函数*/

// function Welcome(props) {
//     if(props.username){
//         return <h1>hello {props.username}</h1>
//     }else {
//        return <h1>hello Stranger</h1>
//     }
// };
// ReactDOM.render(<Welcome username="red"/>,document.querySelector("#root"));
/*类定义组件，但必须继承自React.Component
* 函数组件没有实例，也没有this
* 类组件是有实例和this的*/

class Welcome extends React.Component{
    render(){//定义组件的
        if(this.props.username){
            return <h1>hello {this.props.username}</h1>
        }else {
            return <h1>hello Stranger</h1>
        }
    }
}
class App extends React.Component{
    render(){
        return(
            <div>
                <Welcome username="mary"></Welcome>
                <Welcome username="jack"></Welcome>
                <Welcome username="lily"></Welcome>
            </div>
        )
    }

}
ReactDOM.render(<App/>,document.querySelector("#root"));
