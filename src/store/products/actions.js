export const SET_PRODUCTS = 'Set products';
export const SET_PRODUCT = 'Set product';
export const CLEAN_PRODUCT = 'Clean product';
export const REMOVE_PRODUCT = 'Remove product';

export const setProducts = data => ({ type: SET_PRODUCTS, data });
export const setProduct = data => ({ type: SET_PRODUCT, data });
export const cleanProduct = () => ({ type: CLEAN_PRODUCT });
export const removeProduct = data => ({ type: REMOVE_PRODUCT, data });
