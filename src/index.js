import $ from 'jquery';
import './app.scss';

import {header} from './scripts/header';
import {main} from './scripts/main';
import {footer} from './scripts/footer';

// Пример для динамического импорта
// import('./scripts/footer')
//   .then(module => {
//     $('body').append(module.footer);
//   });

$('body').prepend(header, main, footer);

if (module.hot) {
  module.hot.accept();
}
