import { Route, Switch } from 'react-router-dom';

import { NotFound } from './notFound';
import { Product } from './products';
import { Category } from './categories';

import { Public } from './Public';
import { Private } from './Private';

export const Pages = ({ user }) => (
  <Switch>
    <Route
      path="/categories/:id"
      exact
      component={Category}
    />
    <Route
      path="/products/:id"
      component={Product}
    />
    {
      user ? Private : Public
    }
    <Route
      render={({ location }) => <NotFound location={location} />}
    />
  </Switch>
);
