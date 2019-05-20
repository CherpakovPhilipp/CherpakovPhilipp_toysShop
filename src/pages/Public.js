import { Route, Switch } from 'react-router-dom';

import { ProductInfo } from './productInfo';
import { Greeting } from './greeting';
import { Login } from './login';
import { NotFound } from './notFound';
import { Registration } from './registration';
import { Categories } from './categories';
import { Contacts } from './contacts';

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
        path="/contacts"
        exact
        component={Contacts}
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
        render={({ location }) => <NotFound location={location} />}
      />
    </Switch>
  );
}
