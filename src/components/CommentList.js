import React,{Component} from 'react';
import Comment from "./Comment";
export default class CommentList extends Component{
    render(){
        return (
           <ul className="list-group">
                   {
                       this.props.comment.map((item,index)=>(
                        <Comment key={index} comment={item} removeComment={this.props.removeComment}/>
                       ))
                   }
           </ul>
        )
    }
}

