import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from './components/header';
import { Main } from './components/main';
import { BrowserRouter as Router } from 'react-router-dom';
import { Pages, PagesAuth } from './pages';

import './styles/general.scss';

class App extends Component {
  state = {
    user: null
  }

  render() {
    const { user } = this.state;

    return (
      <>
        <Header onLogout={this.onLogout} user={user} />
        <Main>
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
