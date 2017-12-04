import React from "react";
import ReactDOM from "react-dom";
/*组件提取
* 1，可复用
* 2，复杂结构
* 3，组件的属性对象props都是只读的*/

/*纯函数
* 1，绝对不能修改输入的参数
* 2，输入的参数一定，输出的结果也是永远一定的*/
let formatDate=date=>date.toLocaleString();
function Avatar(props) {
    return(
        <img className="Avatar" style={{borderRadius:"50%",width:100,height:100}}
             src={props.user.avatarUrl}
             alt={props.user.name}
        />
    )
}
function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user}></Avatar>
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    )
}
function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author}/>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}
let comment={
    author:{
        name:"张三",
        avatarUrl:"http://img.qqu.cc/uploads/allimg/140922/2-140922160504.jpg",

    },
    text:"欢迎光临",
    date:new Date(),
}
ReactDOM.render(<Comment {...comment} />,document.querySelector("#root"));

