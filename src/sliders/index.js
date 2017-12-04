import React from "react";
import ReactDOM from "react-dom";
import Sliders from "./components/Sliders";
const IMAGES=[
    require("./images/1.gif"),//编译后的路径
    require("./images/2.gif"),
    require("./images/3.jpg"),
]
/**
 * images 图片的数据源
 * speed 每轮播一次需要的时间
 * delay 多长时间轮播一次
 * autoPlay是否开启自动轮播
 * autoPause 当鼠标滑过时是否暂停轮播
 */
ReactDOM.render(
    <Sliders
        images={IMAGES}
        speed={1.2}
        delay={2}
        autoPlay={true}
        autoPause={true}
    />,
    document.querySelector("#root"));
