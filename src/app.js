import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from './components/header';
import { Main } from './components/main';
import { Footer } from './components/footer';
import { Context } from './context.js';

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
      <Context.Provider value={theme}>
        <Header theme />
        <Main user="Default User" />
        <Footer />
      </Context.Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) { // для того, чтоб перезагружалась только часть кода (js)
  module.hot.accept();
}
