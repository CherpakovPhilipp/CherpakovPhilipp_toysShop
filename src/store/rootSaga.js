import { all } from 'redux-saga/effects';
import { userWatcher } from './user';
import { productWatcher } from './products';
import { categoryWatcher } from './categories';

export function* rootSaga() {
  console.log('saga testing');

  yield all([
    userWatcher(),
    productWatcher(),
    categoryWatcher(),
  ]);
}
