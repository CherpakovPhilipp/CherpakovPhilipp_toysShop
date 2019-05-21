import React from 'react';
import ReactDOM from 'react-dom';

import { server } from './services';
import { Header } from './components/header';
import { Main } from './components/main';
import { Context } from './context.js';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import { Pages, PagesAuth } from './pages';
import  { Loader } from './components/loader';
import { checkUserService } from './services/userService';

import './styles/general.scss';

class App extends Component {
  state = {
    user: null,
    isLoading: true
  }

  componentDidMount() {
    this.checkUser();
  }

  componentDidUpdate(prevProp, prevStates) {
    const { user } = this.state;

    // делаем редирект на гл. страницу при логауте
    if (prevStates.user && !user) {
      this.props.history.push('/');
    }
  }

  onLogin = (user) => {
    this.setState({ user: user.firstName });
  }

  onLogout = () => {
    this.setState({ user: null });
  }

  checkUser = () => {
    this.setState({ isLoading: true });

    checkUserService()
      .then(user => {
        this.onLogin(user);
        this.setState({ isLoading: false })
      })
      .catch(() => {
        this.setState({ isLoading: false });
      })
  }

  render() {
    const { user, isLoading } = this.state;

    return (
      <>
        <Header onLogout={this.onLogout} user={user} />
        <Main>
          {
            isLoading 
              ? <Loader shown={isLoading} />
              : <Pages onLogin={this.onLogin} user={user} />

            //<Pages onLogin={this.onLogin} user={user} />
          }
        </Main>
      </>
    );
  }
}

const RouteApp = withRouter(App); // withRouter для того, чтоб App передать history

const Root = (
  <Router>
    <RouteApp />
  </Router>
);

ReactDOM.render(Root, document.getElementById('app'));

if (module.hot) { // для того, чтоб перезагружалась только часть кода (js)
  module.hot.accept();
}
