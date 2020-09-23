// 生成虚拟DOM
function createElement(tag, attrs, ...children) {
  return {
    tag,
    attrs,
    children,
  };
}

const React = {
  createElement,
};

export default React;
