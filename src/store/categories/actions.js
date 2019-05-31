export const SET_CATEGORIES = 'Set categories';
export const SET_CATEGORY = 'Set category';
export const SET_INFO = 'Set info';

export const setCategories = data => ({ type: SET_CATEGORIES, data });
export const setCategory = data => ({ type: SET_CATEGORY, data });
export const setInfo = data => ({ type: SET_INFO, data });
