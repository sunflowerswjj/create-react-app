//JSX属性
//1.普通属性
//2,特殊属性 class-->className  for-->htmlFor
//3，如果属性名是多个单词的话，采用驼峰命名法
//4,children属性
//5，属性值里可以放变量，需要用花括号包起
import React from "react";
import {render} from "react-dom";
render(<div id="row" className="bg" htmlFor="inputform">hello</div>,document.querySelector("#root"));
