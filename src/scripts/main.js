import builder from './elementBuilder';
import './../styles/main.scss';

// const content = `<h1>Here will be main content</h1>
//                  <img src="https://resize.indiatvnews.com/en/centered/newbucket/715_431/2018/03/h6-1521531233.jpg" alt="content image"/>
//                  <span>${new Date()}</span>`;
const content = `<h1>Here will be main content</h1>
                 <span>${new Date()}</span>`;

const main = builder('main', content, 'main_block');

export {main};