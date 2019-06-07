import storeState from '../state';
import { SET_USER, REMOVE_USER, SET_USER_BEGIN, ERROR_USER } from './actions';

export const user = (state = storeState.user, action) => {
  switch (action.type) {
    case SET_USER_BEGIN: return {
      ...state,
      status: {
        loading: true,
        error: ''
      }
    };
    case SET_USER: return {
      data: action.data,
      status: {
        loading: false,
        error: ''
      }
    };
    case ERROR_USER: return {
      ...state,
      status: {
        loading: false,
        error: action.data
      }
    };
    case REMOVE_USER: return storeState.user;
  }

  return state;
};
