import builder from './elementBuilder';
const content = '<a href="/">Logo</a>';
import './header.css';

const header = builder('header', content, 'header');

export {header};
