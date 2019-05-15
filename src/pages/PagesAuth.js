import { Route, Switch, Redirect } from 'react-router-dom';

import { ProductInfo } from './productInfo';
import { Greeting } from './form';
import { NotFound } from './notFound';

export const PagesAuth = () => {
  return (
    <Switch>
      <Route
        path="/"
        exact
        component={Greeting}
      />
      <Route
        path="/product-info"
        exact
        component={ProductInfo}
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