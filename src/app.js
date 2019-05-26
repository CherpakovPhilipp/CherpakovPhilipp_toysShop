import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

import { store } from './store';
import { App } from './appComponent';

const RouteApp = withRouter(App); // withRouter для того, чтоб App передать history

const Root = (
  <Provider store={store}>
    <Router>
      <RouteApp />
    </Router>
  </Provider>
);

ReactDOM.render(Root, document.getElementById('app'));

if (module.hot) { // для того, чтоб перезагружалась только часть кода (js)
  module.hot.accept();
}
