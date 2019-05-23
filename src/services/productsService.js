import { server } from './index';

export const getProductsService = () => server.get('public/products');

export const getProductService = id => server.get(`public/products/${id}`);

export const createProductService = (title = 'New product', price = '0$', description = '') => server.post('products', { title, price, description });

export const updateProductService = (id, title = 'New product', price = '0$', description = '') => server.put(`products/${id}`, { title, price, description });

export const uploadProductImageService = id => server.post(`products/${id}/upload`, { id });