class ElementWrapper {
  constructor(tag, attributes, children) {
    this.root = document.createElement(tag);

    for (const name in attributes) {
      if (name === "className") {
        this.root.setAttribute("class", attributes[name]);
      } else {
        this.root.setAttribute(name, attributes[name]);
      }
    }

    for (const child of children) {
      this.root.appendChild(child.getDOM());
    }
  }

  getDOM() {
    return this.root;
  }
}

class TextWrapper {
  constructor(content) {
    this.root = document.createTextNode(content);
  }
  getDOM() {
    return this.root;
  }
}

export class Component {
  constructor(attributes, children) {
    this.attributes = attributes;
    this.children = children;
  }

  getDOM() {
    return this.render().getDOM();
  }
}

export const React = {
  createElement: (tag, attributes, ...children) => {
    console.log(tag, attributes, children);
    let element;

    let result = [];

    const visit = (children) => {
      for (const child of children) {
        if (typeof child === "string") {
          // document.createTextNode(child)
          result.push(new TextWrapper(child));
        } else if (typeof child === "number") {
          result.push(new TextWrapper(child.toString()));
        } else if (typeof child === "object" && child instanceof Array) {
          visit(child);
        } else {
          result.push(child);
        }
      }
    };

    visit(children);

    if (typeof tag === "string") {
      // e =  document.createElement(tag)
      element = new ElementWrapper(tag, attributes, result);
    } else {
      element = new tag(attributes, result);
    }

    return element;
  },
};
