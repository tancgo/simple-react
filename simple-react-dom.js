const ReactDOM = {
  render: (vnode, container) => {
    container.innerHTML = "";
    return render(vnode, container);
  },
};

function render(vnode, container) {
  // 当vnode是字符串时,渲染结果是一段文本
  if (typeof vnode === "string") {
    const textNode = document.createTextNode(vnode);
    return container.appendChild(textNode);
  }

  const dom = document.createElement(vnode.tag);

  if (vnode.attrs) {
    for (const key in vnode.attrs) {
      setAttribute(dom, key, vnode.attrs[key]);
    }
  }

  // 递归渲染子节点
  vnode.children.forEach((child) => render(child, dom));

  // 将渲染结果挂载到真实的DOM上
  return container.appendChild(dom);
}

function setAttribute(dom, name, value) {
  // 如果属性名是className
  if (name === "className") name = "class";

  // 如果属性名是onXXX,则是一个事件监听方法
  if (/on\w+/.test(name)) {
    name = name.toLowerCase();
  } else if (name === "style") {
    // style="border:2px dashed green;color:red;"
    if (!value || typeof value === "string") {
      dom.style.cssText = value || "";
    } else if (value && typeof value === "object") {
      // 可以通过style={ width: 20 }这种形式来设置样式，可以省略掉单位px
      for (const name in value) {
        dom.style[name] =
          typeof value[name] === "number" ? value[name] + "px" : value[name];
      }
      // 其余为普通属性
    } else {
      // if (name in dom) {
      //   dom[name] = value || "";
      // }

      // if (value) {
      //   dom.setAttribute(name, value);
      // } else {
      //   dom.removeAttribute(name, value);
      // }
      dom.setAttribute(name, value);
    }
  }
}

export default ReactDOM;
