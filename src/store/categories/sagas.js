import { takeEvery, put, all } from 'redux-saga/effects';

import { setCategories, setCategory, setInfo, SET_CATEGORIES_ASYNC, SET_CATEGORY_ASYNC, SET_INFO_ASYNC, UPDATE_CATEGORY_ASYNC, DELETE_CATEGORY_ASYNC } from './actions';
import { getCategoriesService, updateCategoryService, deleteCategoryService, getCategoryService, getShopInfoService } from '../../services/categoriesService';

function* setCategoriesSaga() {
  try {
    const categories = yield getCategoriesService();
    yield put(setCategories(categories));
  } catch (err) {}
}

function* setCategorySaga(action) {
  try {
    const category = yield getCategoryService(action.data);
    yield put(setCategory(category));
  } catch (err) {}
}

function* updateCategorySaga(action) {
  try {
    yield updateCategoryService(...action.data);

    const categories = yield getCategoriesService();
    yield put(setCategories(categories));
  } catch (err) {}
}

function* deleteCategorySaga(action) {
  try {
    const category = yield deleteCategoryService(action.data);
    yield put(setProducts(category));
  } catch (err) {}
}

function* setInfoSaga(action) {
  try {
    const info = yield getShopInfoService(action.data);
    yield put(setInfo(info));
  } catch (err) {}
}

export function* categoryWatcher() {
  yield all([
    yield takeEvery(SET_CATEGORIES_ASYNC, setCategoriesSaga),
    yield takeEvery(SET_CATEGORY_ASYNC, setCategorySaga),
    yield takeEvery(UPDATE_CATEGORY_ASYNC, updateCategorySaga),
    yield takeEvery(DELETE_CATEGORY_ASYNC, deleteCategorySaga),
    yield takeEvery(SET_INFO_ASYNC, setInfoSaga),
  ]);
}
