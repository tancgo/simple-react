import React from "./simple-react";
import ReactDOM from "./simple-react-dom";

function tick() {
  const element = (
    <div>
      <h1 style="color: green">Hello, world!</h1>
      <h2>2020</h2>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById("root"));
}

setInterval(tick, 1000);
