import { Route, Switch, Redirect } from 'react-router-dom';

import { Greeting } from './greeting';
import { NotFound } from './notFound';
import { Products } from './products';
import { ProductInfo } from './productInfo';

export const PagesAuth = ({ user }) => {
  return (
    <Switch>
      <Route
        path="/"
        exact
        render={(props) =><Greeting user={user} { ...props } />}
      />
      <Route
        path="/product-info"
        exact
        component={ProductInfo}
      />
      <Route
        path="/products"
        exact
        component={Products}
      />
      <Redirect
        from="/login"
        to="/"
      />
      <Route
        render={({ location }) => <NotFound location={location} />}
      />
    </Switch>
  );
}