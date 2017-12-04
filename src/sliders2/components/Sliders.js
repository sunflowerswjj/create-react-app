import React,{Component} from 'react';
import "./Sliders.css"
import SliderItem from "./SliderItem";
import SliderArrows from "./SliderArrow";
import SliderDots from "./SliderDots";
export default class Sliders extends Component{
    constructor(){
        super();
        this.state={index:0}
    }
    turn=(step)=>{
        let index=this.state.index+step;
        if(index>=this.props.images.length){
            index=0;
        }
        if(index<0){
            index=this.props.images.length-1
        }

        this.setState({index});
    }
    go=()=>{
       this.timerId= setInterval(()=>{
            this.turn(1)
        },this.props.delay*1000)
    }
    componentDidMount(){
        if(this.props.autoPlay){
            this.go();
        }
    }


    render(){

        return (
            <div className="wrapper" onMouseOver={()=>clearInterval(this.timerId)}onMouseOut={()=>this.go()}>
                <SliderItem images={this.props.images} index={this.state.index} speed={this.props.speed}/>
                <SliderArrows turn={this.turn}/>
                <SliderDots images={this.props.images} index={this.state.index} turn={this.turn}/>
            </div>
        )
    }
}

