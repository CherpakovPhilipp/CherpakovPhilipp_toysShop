import { Route, Redirect } from 'react-router-dom';

import { Greeting } from './greeting';
import { Products } from './products';
import { UserForm } from '../components/userForm';

export const Private = [
  <Route
    path="/"
    exact
    component={Greeting}
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
    render={props => <UserForm exclude={[]} disabled={[]} {...props} />}
    key="user"
  />,
  <Redirect
    from="/login"
    to="/"
    key="login"
  />,
];
