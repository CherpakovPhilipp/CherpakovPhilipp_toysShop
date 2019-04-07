const $ = require('jquery');
import './app.scss';

import {header} from './scripts/header';
import {main} from './scripts/main';
import {footer} from './scripts/main';

$('body').prepend(header, main, footer);
