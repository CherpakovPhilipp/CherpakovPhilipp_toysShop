export const SET_PRODUCTS = 'Set products';
export const SET_PRODUCTS_ASYNC = 'Set products async';
export const SET_PRODUCT = 'Set product';
export const SET_PRODUCT_ASYNC = 'Set product async';
export const UPDATE_PRODUCT_ASYNC = 'Update products async';
export const CLEAN_PRODUCT = 'Clean product';
export const REMOVE_PRODUCT = 'Remove product';
export const REMOVE_PRODUCT_ASYNC = 'Remove product async';

export const setProducts = data => ({ type: SET_PRODUCTS, data });
export const setProductsAsync = data => ({ type: SET_PRODUCTS_ASYNC, data });
export const setProduct = data => ({ type: SET_PRODUCT, data });
export const setProductAsync = data => ({ type: SET_PRODUCT_ASYNC, data });
export const updateProductAsync = data => ({ type: UPDATE_PRODUCT_ASYNC, data });
export const cleanProduct = () => ({ type: CLEAN_PRODUCT });
export const removeProduct = data => ({ type: REMOVE_PRODUCT, data });
export const removeProductAsync = data => ({ type: REMOVE_PRODUCT_ASYNC, data });
