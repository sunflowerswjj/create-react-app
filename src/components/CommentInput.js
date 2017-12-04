import React,{Component} from 'react';
export default class CommentInput extends Component{

    constructor(){
        super();
        this.state={author:"",content:""};

    }
    handleSubmit=(event)=>{
        event.preventDefault();
        this.props.addComment(this.state);//调用父组件传递过来的方法添加评论
        this.setState({content:""});//提交之后清空内容
        localStorage.setItem("author",this.state.author);//提交时保存用户名
    };
    componentDidMount(){
        this.setState({author:localStorage.getItem("author")||""});
    }
    handleChange=(event,key)=>{

        this.setState({[key]:event.target.value})
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-horizontal" >
                  <div className="form-group">
                      <label htmlFor="author" className="control-label col-md-2">作者</label>
                      <div className="col-md-10">
                          <input type="text" className="form-control" value={this.state.author} onChange={event=>this.handleChange(event,"author")}/>
                      </div>
                  </div>  
                  <div className="form-group">
                      <label htmlFor="content" className="control-label col-md-2">内容</label>
                     <div className="col-md-10">
                         <textarea name="content" id="content" cols="30" rows="10" className="form-control" onChange={event=>this.handleChange(event,"content")}  value={this.state.content} autoFocus>
                         </textarea>
                     </div>
                  </div>
                  <div className="form-group">
                      <div className="col-md-offset-2 col-md-10">
                          <input type="submit" className="btn btn-primary" />
                      </div>
                  </div>
                </div>
            </form>
        )
    }
}
