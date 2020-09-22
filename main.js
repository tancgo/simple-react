import { React, Component } from "./simple-react";
import { render } from "./simple-react-dom";

class MyComponent extends Component {
  render() {
    return (
      <div>
        <h1>my component</h1>
        {this.children}
      </div>
    );
  }
}

render(
  <MyComponent id="a" class="c">
    <div>abc</div>
    <div>def</div>
    <div>kkk</div>
  </MyComponent>,
  document.body
);
