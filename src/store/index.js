import { createStore, combineReducers } from 'redux';
import { user } from './user';
import { products, product } from './products';
import { categories, category, info } from './categories';
import { status } from './status';

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
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// second argument is used to add redux dev tool (should be pre-installed in browser)