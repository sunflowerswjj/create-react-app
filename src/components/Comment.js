import React,{Component} from 'react';
import "moment/locale/zh-cn";//中文语言包
import moment from "moment"
export default class Comment extends Component{
    render(){
        return (
            <li className="list-group-item" >
                {this.props.comment.author}:{this.props.comment.content}
                <button className="btn btn-danger btn-xs pull-right" onClick={()=>this.props.removeComment(this.props.comment.id)}>删除</button>
                <span className="pull-right">{moment(this.props.comment.createAt).fromNow()}</span>
            </li>
        )
    }
}

