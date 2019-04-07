import builder from './elementBuilder';
import './../styles/header.scss';

const content = '<a href="/">Logo</a>';
const header = builder('header', content, 'header');

export {header};
