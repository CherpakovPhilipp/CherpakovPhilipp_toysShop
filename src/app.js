import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from './components/header';
import { Main } from './components/main';
import { Footer } from './components/footer';

import './styles/general.scss';

const App = () => (
  <>
    <Header />
    <Main user="Default User" />
    <Footer />
  </>
);

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) { // для того, чтоб перезагружалась только часть кода (js)
  module.hot.accept();
}
