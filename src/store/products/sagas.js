import { takeEvery, put, all } from 'redux-saga/effects';

import { 
  setProducts, 
  setProduct, 
  removeProduct, 
  SET_PRODUCTS_ASYNC, 
  SET_PRODUCT_ASYNC, 
  UPDATE_PRODUCT_ASYNC, 
  REMOVE_PRODUCT_ASYNC 
} from './actions';
import { 
  getProductsService, 
  getProductService, 
  deleteProductService, 
  updateProductService 
} from '../../services/productsService';

function* setProductsSaga(action) {
  try {
    const products = yield getProductsService(action.data);
    yield put(setProducts(products));
  } catch (err) {}
}

function* setProductSaga(action) {
  try {
    const products = yield getProductService(action.data);
    yield put(setProduct(products));
  } catch (err) {}
}

function* updateProductSaga(action) {
  try {
    yield updateProductService(...action.data);
  } catch (err) {}
}

function* removeProductSaga(action) {
  try {
    const product = yield deleteProductService(action.data);
    yield put(removeProduct(product));

    const products = yield getProductsService(action.data);
    yield put(setProducts(products));
  } catch (err) {}
}

export function* productWatcher() {
  yield all([
    yield takeEvery(SET_PRODUCTS_ASYNC, setProductsSaga),
    yield takeEvery(SET_PRODUCT_ASYNC, setProductSaga),
    yield takeEvery(REMOVE_PRODUCT_ASYNC, removeProductSaga),
    yield takeEvery(UPDATE_PRODUCT_ASYNC, updateProductSaga),
  ]);
}
