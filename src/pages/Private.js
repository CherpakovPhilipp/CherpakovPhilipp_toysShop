import { Route, Redirect } from 'react-router-dom';

import { HomeAuth } from './homeAuth';
import { Products } from './products';
import { UserForm } from '../components/userForm';

export const Private = [
  <Route
    path="/"
    exact
    component={HomeAuth}
    key="homeAuth"
  />,
  <Route
    path="/products"
    exact
    component={Products}
    key="products"
  />,
  <Route
    path="/user"
    exact
    component={UserForm}
    key="user"
  />,
  <Redirect
    from="/login"
    to="/"
    key="login"
  />,
];
