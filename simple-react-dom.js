export const render = (component, parentElement) => {
  console.log(component, component.getDOM(), 'component');
  parentElement.appendChild(component.getDOM());
};