import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from './components/header';
import { Main } from './components/main';
import { Context } from './context.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Pages } from './pages';

import './assets/images/main-bg.png';
import './styles/general.scss';

class App extends Component {
  state = {
    user: null
  }

  onLogin(user) {
    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    return (
      <>
        <Header />
        <Main user="Default User">
          <Pages onLogin={this.onLogin} user={user} />
        </Main>
      </>
    );
  }
}

const Root = (
  <Router>
    <App />
  </Router>
);

ReactDOM.render(Root, document.getElementById('app'));

if (module.hot) { // для того, чтоб перезагружалась только часть кода (js)
  module.hot.accept();
}
