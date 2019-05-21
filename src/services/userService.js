import { server } from './index';

export const checkUserService = () => server.get('public/checkUser');

//export const onLoginService = () => server.get('public/checkUser'); 