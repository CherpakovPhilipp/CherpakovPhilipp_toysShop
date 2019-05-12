import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from './components/header';
import { Main } from './components/main';
import { Context } from './context.js';

import './assets/images/main-bg.png';
import './styles/general.scss';

class App extends Component {
  state = {
    theme: 'light'
  }

  render() {
    const theme = {
      value: this.state.theme,
      switch: this.switchTheme
    };

    return (
      <>
        <Header />
        <Main user="Default User" />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) { // для того, чтоб перезагружалась только часть кода (js)
  module.hot.accept();
}
