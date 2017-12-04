import React,{Component} from "react";
import ReactDOM from "react-dom";
//两兄弟组件通信，需要找他们共同最近的父组件
class Input extends Component {
    handleChange=(event)=>{
        let percent=event.target.value;
        this.props.setPercent(percent);
    }
    render(){

        return(
            <div>
                <input type="number" value={this.props.percent} onChange={this.handleChange}/>
            </div>
        )

    }

}
class PercenrageShower extends Component {
        render(){
            return(
                <div>{(parseFloat(this.props.percent)*100).toFixed(2)+"%"}</div>
            )
        }
}


class PercentageApp extends Component {
    constructor(){
        super();
        this.state={percent:0.00}
    }

    setPercent=(percent)=>{
        this.setState({percent})
    }
    render(){
        return(
            <div>
                <Input  percent={this.state.percent} setPercent={this.setPercent}/>
                <PercenrageShower percent={this.state.percent}/>
            </div>
        )
    }
}
ReactDOM.render(<PercentageApp/>,document.querySelector("#root"));
