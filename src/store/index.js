import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { user } from './user';
import { products, product } from './products';
import { categories, category, info } from './categories';
import { status } from './status';
import { rootSaga } from './rootSaga';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const rootReducers = combineReducers({
  user,
  products,
  product,
  categories,
  category,
  info,
  status
});

export const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
// second argument is used to add redux dev tool (should be pre-installed in browser)

sagaMiddleware.run(rootSaga);
