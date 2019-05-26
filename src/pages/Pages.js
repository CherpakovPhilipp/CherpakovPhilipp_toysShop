import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { NotFound } from './notFound';
import { ProductInfo } from './productInfo';
import { Categories } from './categories';
import { Public } from './Public';
import { Private } from './Private';

export const PagesComponent = ({ user }) => (
  <Switch>
    <Route
      path="/categories"
      exact
      component={Categories}
    />
    <Route
      path="/categories/:id"
      exact
      component={Categories}
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

const mapStateToProps = state => ({ user: state.user });

export const Pages = connect(mapStateToProps)(PagesComponent);
