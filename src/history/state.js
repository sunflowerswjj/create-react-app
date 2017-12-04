import React from "react";
import ReactDOM from "react-dom";
/*组件的状态是类组件所特有的，是用来描述组件内部可变化的数据当类实例化的时候，会自动调用构造函数里初始化的状态*/
/*渲染组件的过程
* 1，初始化属性对象，然后调用类的构造函数，并把属性对象传进去,得到组件的实例
* 2，会调用实例的render方法得到返回的React元素
* 3，render方法会把React元素转成真是的DOM元素插入容器中*/
class Clock extends React.Component{
    constructor(props){
        super();//当一个类继承另一个类的时候，需要先调用父类的构造函数，super就指向父类的构造函数
        this.state={age:8,time:new Date()}
    }
    /*组件挂载完成后，在这个生命周期函数里才有真实的DOM对象*/
    //setState
    /*1,此方法由来修改状态，传入一个增量状态，会附带同名属性或者增加新属性，而不是删除掉老的状态
    * 2，调用setState方法不但会修改状态，还会重新调用render方法进行渲染
    * 3,除了*/
    componentDidMount(){
        this.timerID=setInterval(()=>{
            this.setState({time:new Date()});
        })
    }
    //组件将要卸载
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    handleClick=()=>{
        //使用箭头函数的话，this就是当前组件的实例
        ReactDOM.unmountComponentAtNode(document.querySelector("#root"));
    }
    render(){
        return(
            <div>
                <h3>当前时间:{this.state.age}</h3>
                <h4>{this.state.time.toLocaleString()}</h4>
                <button onClick={this.handleClick} >自杀</button>
            </div>
        )
    }
}
ReactDOM.render(<Clock/>,document.querySelector("#root"));
