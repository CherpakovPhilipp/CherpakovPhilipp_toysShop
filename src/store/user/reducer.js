import storeState from '../state';
import { SET_USER, REMOVE_USER } from './actions';

export const user = (state = storeState.user, action) => {
  switch (action.type) {
    case SET_USER: return action.data;
    case REMOVE_USER: return storeState.user;
  }

  return state;
}
