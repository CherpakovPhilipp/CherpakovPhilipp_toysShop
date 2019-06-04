import { all } from 'redux-saga/effects';
import { userWatcher, userWatcherLogin } from './user';

export function* rootSaga() {
  console.log('saga testing');

  yield all([
    userWatcher(),
  ])
}
