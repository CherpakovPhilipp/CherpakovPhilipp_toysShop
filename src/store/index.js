import { createStore, combineReducers } from 'redux';
import { user } from './user';
import { products } from './products';
import { categories } from './categories';

const rootReducers = combineReducers({
  user,
  products,
  categories
});

export const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// second argument is used to add redux dev tool (should be pre-installed in browser)
