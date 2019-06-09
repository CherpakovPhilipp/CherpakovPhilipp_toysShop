import { Route } from 'react-router-dom';

import { Home } from './home';
import { Login } from './login';
import { NewUser } from './newUser';
import { Contacts } from './contacts';
import { Success } from './success';

export const Public = [
  <Route
    path="/"
    exact
    component={Home}
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
    component={NewUser}
    key="registration"
  />,
  <Route
    path="/success"
    exact
    component={Success}
    key="success"
  />,
];
