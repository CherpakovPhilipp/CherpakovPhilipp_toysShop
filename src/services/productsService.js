import { server } from './index';

export const getProductsService = () => server.get('public/products');

export const getProductService = id => server.get(`public/products/${id}`);

export const createProductService = data => server.post('products', data);

export const deleteProductService = id => server.delete(`products/${id}`);

export const updateProductService = (id, data) => server.put(`products/${id}`, data);

export const uploadProductImageService = (id, data) => server.post(`products/${id}/upload`, data);
