import { server } from './index';

export const checkUserService = () => server.get('public/checkUser');

export const loginUserService = data => server.post('public/login', data);

export const createUserService = user => server.post('public/user', user);
