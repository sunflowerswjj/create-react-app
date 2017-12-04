import React from "react";
import ReactDOM from "react-dom";
function tick() {
        let element=(
            <div>
               <h4 className="div1">现在时间是：{new Date().toLocaleString()}</h4>
            </div>
        );
    ReactDOM.render(element,document.querySelector("#root"));
}
setInterval(tick,1000);
