import { takeEvery, put, all } from 'redux-saga/effects';

import { setProducts, removeProduct, SET_PRODUCTS_ASYNC, REMOVE_PRODUCT_ASYNC } from './actions';
import { getProductsService, deleteProductService, updateProductService } from '../../services/productsService';

function* fetchProducts(action) {
  try {
    const products = yield getProductsService(action.data);
    yield put(setProducts(products));
  } catch (err) {}
}

function* fetchProducts(action) {
  try {
    const products = yield getProductsService(action.data);
    yield put(setProducts(products));
  } catch (err) {}
}

export function* productWatcher() {
  yield all ([
    yield takeEvery(SET_PRODUCTS_ASYNC, fetchProducts),
  ])
}
