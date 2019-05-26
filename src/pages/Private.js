import { Route, Redirect } from 'react-router-dom';

import { Greeting } from './greeting';
import { Products } from './products';

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
  <Redirect
    from="/login"
    to="/"
    key="login"
  />,
];
