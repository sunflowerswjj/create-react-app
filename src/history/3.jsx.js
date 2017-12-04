//JSX表达式
/*在JSX里可以嵌套表达式*/

import React from "react";
import ReactDOM from "react-dom";
const user={
    firstName:"zhang",
    lastName:"san",
};
function formatUser(user){
    return user.firstName+user.lastName;
}
function greeting(user){
    if(user){
        return <h1>hello{formatUser(user)}</h1>
    }else {
        return <h2>hello Stranger</h2>
    }
}
//放在小括号里，JSX表达式里的变量需放在花括号里，表达式里不能放对象，可以放字符串、数字，还可以放函数的调用，但必须返回一个值(基本数据类型)
let ele=(
    <h1>
    {formatUser(user)}
    </h1>
);
let ele2=(
    <h2>
        {greeting(user)}
    </h2>
);
ReactDOM.render(ele,document.querySelector("#root"));
ReactDOM.render(ele2,document.querySelector("#root"));