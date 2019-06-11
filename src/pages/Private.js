import { Route, Redirect } from 'react-router-dom';

import { HomeAuth } from './homeAuth';
import { Products, Product } from './products';
import { NewCategory } from './categories';

import { UpdateUser } from './updateUser';

export const Private = [
  <Route
    path="/"
    exact
    component={HomeAuth}
    key="homeAuth"
  />,
  <Route
    path="/new-category"
    exact
    component={NewCategory}
    key="new-category"
  />,
  <Route
    path="/products"
    exact
    component={Products}
    key="products"
  />,
  <Route
    path="/products/new"
    exact
    component={Product}
    key="products"
  />,
  <Route
    path="/user"
    exact
    component={UpdateUser}
    key="user"
  />,
  <Redirect
    from="/login"
    to="/"
    key="login"
  />,
];
