import React,{Component} from 'react';
import "./Sliders.css";
import SliderItem from "./SliderItem";
import SliderArrows from "./SliderArrows";
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
        this.timeId=setInterval(()=>{
           this.turn(1);
        },this.props.delay*1000)
    }
    componentDidMount(){
        if(this.props.autoPlay) this.go();

        }
    render(){
        return (
            <div className="wrapper" onMouseOver={()=>clearInterval(this.timeId)} onMouseOut={this.go}>
                <SliderItem
                    images={this.props.images}
                    speed={this.props.speed}
                    index={this.state.index}
                />
                <SliderArrows turn={this.turn}/>
                <SliderDots images={this.props.images} index={this.state.index} turn={this.turn} />
            </div>
        )
    }
}
