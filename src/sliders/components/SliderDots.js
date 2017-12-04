import React,{Component} from 'react';
export default class SliderDots extends Component{
    render(){
        return (
            <div className="dots">
                {
                  this.props.images.map((item,index)=>(<span onClick={()=>this.props.turn(index-this.props.index)} className={"dot "+(index===this.props.index?"active":"")} key={index}></span>))
                }
            </div>
        )
    }
}

