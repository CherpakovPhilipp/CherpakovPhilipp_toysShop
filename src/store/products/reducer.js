import storeState from '../state';
import { SET_PRODUCTS } from './actions';

export const products = (state = storeState.products, action) => {
  switch (action.type) {
    case SET_PRODUCTS: return action.data;
  }

  return state;
}
