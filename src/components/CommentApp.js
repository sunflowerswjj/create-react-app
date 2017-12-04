import React,{Component} from 'react';
import CommentList from "./CommentList";
import CommentInput from "./CommentInput";
//我们对代码放置顺序有约定  静态属性、构造函数。生命周期函数、自定义函数、render
export default class CommentApp extends Component{
    constructor(props){
        super(props);
        //评论列表的数组
        this.state={comments:[]};
    }
    componentDidMount(){
        clearInterval(this.timer1);
        this.setState({comments:localStorage.getItem("comments")?JSON.parse(localStorage.getItem("comments")):[]})
        this.timer1=setInterval(()=>this.setState({comments:this.state.comments}),5000)
    }
    removeComment=(deletedId)=>{
        this.setState({comments:this.state.comments.filter(item=>item.id!==deletedId)},()=>{
            localStorage.setItem("comments",JSON.stringify(this.state.comments))//本地存储存的是字符串
        });
    }

    addComment=(comment)=>{
        comment.id=Date.now();
        comment.createAt=new Date();
        this.setState({comments:[...this.state.comments,comment]},()=>{
            localStorage.setItem("comments",JSON.stringify(this.state.comments))//本地存储存的是字符串
        });

    }
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="text-center">欢迎来到珠峰留言板</h3>
                            </div>
                            <div className="panel-body">
                                <CommentList comment={this.state.comments} removeComment={this.removeComment}/>
                            </div>
                            <div className="panel-footer">
                                <CommentInput addComment={this.addComment}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

