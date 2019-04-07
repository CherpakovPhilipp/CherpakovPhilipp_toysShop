import $ from 'jquery';
import './app.scss';

import {header} from './scripts/header';
import {main} from './scripts/main';
import {footer} from './scripts/footer';

$('body').prepend(header, main, footer);
