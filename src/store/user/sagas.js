import { takeEvery, put, all } from 'redux-saga/effects';

import { setUser, SET_USER_ASYNC, LOGIN_USER_ASYNC } from './actions';
import { checkUserService, loginUserService } from '../../services';

function* fetchUser() {
  try {
    const user = yield checkUserService();
    yield put(setUser(user));
  } catch (err) {}
}

function* loginhUser(action) {
  try {
    const user = yield loginUserService(action.data);
    yield put(setUser(user));
  } catch (err) {}
}

export function* userWatcher() {
  yield all ([
    yield takeEvery(SET_USER_ASYNC, fetchUser),
    yield takeEvery(LOGIN_USER_ASYNC, loginhUser),
  ])
}