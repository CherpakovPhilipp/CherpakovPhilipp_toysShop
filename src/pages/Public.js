import { Route, Switch } from 'react-router-dom';

import { ProductInfo } from './productInfo';
import { Greeting } from './greeting';
import { Login } from './login';
import { NotFound } from './notFound';
import { Registration } from './registration';
import { Category } from './category';

export const Public = ({ onLogin }) => {
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
        path="/categories/:id"
        exact
        component={Category}
      />
      <Route
        render={({ location }) => <NotFound location={location} />}
      />
    </Switch>
  );
}