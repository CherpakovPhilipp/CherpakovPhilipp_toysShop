import { all } from 'redux-saga/effects';
import { userWatcher, userWatcherLogin } from './user';
import { productWatcher } from './products';

export function* rootSaga() {
  console.log('saga testing');

  yield all([
    userWatcher(),
    productWatcher(),
  ])
}
