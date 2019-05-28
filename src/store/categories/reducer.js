import storeState from '../state';
import { SET_CATEGORIES, SET_INFO } from './actions';

export const categories = (state = storeState.categories, action) => {
  switch (action.type) {
    case SET_CATEGORIES: return action.data;
  }

  return state;
};

export const info = (state = storeState.info, action) => {
  if (action.type == SET_INFO) {
      return action.data;
  }

  return state;
};
