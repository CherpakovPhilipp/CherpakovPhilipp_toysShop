export const SET_CATEGORIES = 'Set categories';
export const SET_CATEGORIES_ASYNC = 'Set categories async';
export const SET_CATEGORY = 'Set category';
export const SET_CATEGORY_ASYNC = 'Set category async';
export const UPDATE_CATEGORY_ASYNC = 'Update category async';
export const SET_INFO = 'Set info';
export const SET_INFO_ASYNC = 'Set info async';
export const DELETE_CATEGORY_ASYNC = 'Delete category async';

export const setCategories = data => ({ type: SET_CATEGORIES, data });
export const setCategoriesAsync = data => ({ type: SET_CATEGORIES_ASYNC, data });
export const setCategory = data => ({ type: SET_CATEGORY, data });
export const setCategoryAsync = data => ({ type: SET_CATEGORY_ASYNC, data });
export const updateCategoryAsync = data => ({ type: UPDATE_CATEGORY_ASYNC, data });
export const setInfo = data => ({ type: SET_INFO, data });
export const setInfoAsync = data => ({ type: SET_INFO_ASYNC, data });
export const deleteCategoryAsync = data => ({ type: DELETE_CATEGORY_ASYNC, data });
