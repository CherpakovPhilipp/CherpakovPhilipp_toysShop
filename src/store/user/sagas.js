import { takeEvery, put, all } from 'redux-saga/effects';

import { setUser, setUserBegin, errorUser, removeUser, SET_USER_ASYNC, LOGIN_USER_ASYNC, CREATE_USER_ASYNC } from './actions';
import { checkUserService, loginUserService, createUserService } from '../../services/userService';

function* fetchUser() {
  yield put(setUserBegin());
  try {
    const user = yield checkUserService();
    yield put(setUser(user));
  } catch (err) {
    yield put(errorUser(`${err}: User fetch error`));
  }
}

function* loginUser(action) {
  try {
    const user = yield loginUserService(action.data);
    yield put(setUser(user));
  } catch (err) {
    yield put(errorUser(`${err}: Wrong login/password`));
  }
}

function* createUser({ data }) {
  try {
    yield createUserService(data.info);
    yield put(removeUser());
    data.callback();
  } catch (err) {
    yield put(errorUser(`${err}: Wrong login/password`));
  }
}

export function* userWatcher() {
  yield all([
    yield takeEvery(SET_USER_ASYNC, fetchUser),
    yield takeEvery(LOGIN_USER_ASYNC, loginUser),
    yield takeEvery(CREATE_USER_ASYNC, createUser),
  ]);
}
