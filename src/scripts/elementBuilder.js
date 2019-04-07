import $ from 'jquery';

export default (tag = 'div', content = '', className = 'box') => {
  const element = $(`<${tag}/>`);
  
  element.addClass(className);
  element.html(content);

  return element;
};
