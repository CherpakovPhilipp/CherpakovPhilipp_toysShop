import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { NotFound } from './notFound';
import { ProductInfo } from './productInfo';
import { Categories, Category } from './categories';

import { Public } from './Public';
import { Private } from './Private';

export const Pages = ({ user }) => (
  <Switch>
    <Route
      path="/categories"
      exact
      component={Categories}
    />
    <Route
      path="/categories/:id"
      exact
      component={Category}
    />
    <Route
      path="/products/:id"
      component={ProductInfo}
    />
    {
      user ? Private : Public
    }
    <Route
      render={({ location }) => <NotFound location={location} />}
    />
  </Switch>
);
