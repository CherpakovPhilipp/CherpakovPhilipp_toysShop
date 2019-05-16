import { Route, Switch, Redirect } from 'react-router-dom';

import { ProductInfo } from './productInfo';
import { Greeting } from './greeting';
import { Login } from './login';
import { NotFound } from './notFound';
import { Registration } from './registration';

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
        path="/registration"
        exact
        component={(props) => <Registration exclude={[]} disabled={[]} { ...props } />}
      />
      <Route
        render={({ location }) => <NotFound location={location} />}
      />
    </Switch>
  );
}