import { Route, Switch, Redirect } from 'react-router-dom';

import { ProductInfo } from './productInfo';
import { Greeting } from './form';
import { Login } from './login';

export const Pages = ({ onLogin, user }) => {
  return (
    user ?
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
        render={({ location }) => <h1>404, Requested page "{location.pathname}" not found</h1>}
      />
    </Switch> :
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
        render={({ location }) => <h1>404, Requested page "{location.pathname}" not found</h1>}
      />
    </Switch>
  );
}