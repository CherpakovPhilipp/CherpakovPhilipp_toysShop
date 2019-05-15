import { Route, Switch, Redirect } from 'react-router-dom';

import { ProductInfo } from './productInfo';
import { Greeting } from './form';
import { Login } from './login';
import { NotFound } from './notFound';

export const Pages = ({ onLogin }) => {
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
      <Route
        path="/login"
        exact
        render={(props) =><Login onLogin={onLogin} { ...props } />}
      />
      <Route
        render={({ location }) => <NotFound location={location} />}
      />
    </Switch>
  );
}