import { Route } from 'react-router-dom';

import { Greeting } from './greeting';
import { Login } from './login';
import { Registration } from '../components/registration';
import { Contacts } from './contacts';

export const Public = [
  <Route
    path="/"
    exact
    component={Greeting}
    key="home"
  />,
  <Route
    path="/contacts"
    exact
    component={Contacts}
    key="contacts"
  />,
  <Route
    path="/login"
    exact
    component={Login}
    key="login"
  />,
  <Route
    path="/registration"
    exact
    render={props => <Registration exclude={[]} disabled={[]} {...props} />}
    key="registration"
  />,
];
