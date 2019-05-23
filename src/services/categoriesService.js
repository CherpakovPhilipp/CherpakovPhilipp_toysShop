import { server } from './index';

export const getCategoriesService = () => server.get('public/categories');

export const getCategoryService = id => server.get(`public/categories/${id}`);

export const getShopInfoService = () => server.get('shop_info');

export const createCategoryService = data => server.post('categories', data);

export const updateCategoryService = (id, data) => server.put(`categories/${id}`, data);

export const deleteCategoryService = id => server.delete(`categories/${id}`);