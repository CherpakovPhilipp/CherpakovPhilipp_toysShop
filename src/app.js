import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from './components/header';
import { Main } from './components/main/Main';
import { Footer } from './components/footer/Footer';

import './styles/general.scss';

const App = () => (
  <>
    <Header />
    <Main />
    <Footer />
  </>
);

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) { // для того, чтоб перезагружалась только часть кода (js)
  module.hot.accept();
}
