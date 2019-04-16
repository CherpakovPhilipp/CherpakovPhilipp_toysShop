import builder from './elementBuilder';
import './../styles/main.scss';

const content = `<h1>Here will be main content</h1>
                 
                 <span>${new Date()}</span>`;

const main = builder('main', content, 'main_block');

export {main};