import { server } from './index';

export const getCategoriesService = () => server.get('public/categories');

export const getCategoryService = id => server.get(`public/categories/${id}`);

export const getShopInfoService = () => server.get('shop_info');

export const createCategoryService = (title = 'New category', products = []) => server.post('categories', { title, products });

export const updateCategoryService = (id, title = 'New category', products = []) => server.put(`categories/${id}`, { title, products });

export const deleteCategoryService = id => server.delete(`categories/${id}`);