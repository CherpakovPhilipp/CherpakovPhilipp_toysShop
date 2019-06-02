import storeState from '../state';
import { SET_PRODUCTS, SET_PRODUCT, CLEAN_PRODUCT, REMOVE_PRODUCT } from './actions';

export const products = (state = storeState.products, action) => {
  switch (action.type) {
    case SET_PRODUCTS: return action.data;
    case REMOVE_PRODUCT: return state.filter(item => item.id !== action.data);
  }

  return state;
};

export const product = (state = storeState.product, action) => {
  switch (action.type) {
    case SET_PRODUCT: return action.data;
    case CLEAN_PRODUCT: return storeState.product;
  }

  return state;
};
