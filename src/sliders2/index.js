import React from "react";
import ReactDOM from "react-dom";
import Sliders from "./components/Sliders";
const IMAGES=[
    require("./images/1.gif"),//编译后的路径
    require("./images/2.gif"),
    require("./images/3.jpg"),
]


ReactDOM.render(
    <Sliders
        images={IMAGES}
        speed={1.2}
        delay={2}
        autoPlay={true}
        autoPause={true}

/>,document.querySelector("#root"));