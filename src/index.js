const $ = require('jquery');

const header = require('./scripts/header');
const main = require('./scripts/main');
const footer = require('./scripts/footer');

$('body').prepend(header, main, footer);
//document.body.appendChild('<a>TEST</a>');
//document.body.appendChild(footer);