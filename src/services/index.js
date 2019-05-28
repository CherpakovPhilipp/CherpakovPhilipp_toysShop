import { store } from '../store';
import { setError } from '../store/status';

const BASE_URL = 'http://localhost:8086';

const additioinalHeaders = {
  headers: { 'Content-type': 'application/json; charset=utf-8' }
};

export const request = (url, method = 'GET', data, settings = {}) => {
  const options = {
    method,
    credentials: 'include',
    ...settings
  };

  if (data) options.body = JSON.stringify(data);

  const promise = fetch(`${BASE_URL}/${url}`, options)
    .then((r) => {
      return r.json();
    })
    .then(data => {
      if (!data.error) return data;

      throw data.error;
    })
    .catch(error => {
      store.dispatch(setError(String(error)));
      throw data.error;
    })

  return promise;
};

export const server = {
  get(url) {
    return request(url);
  },

  delete(url) {
    return request(url, 'delete');
  },

  post(url, data) {
    return request(url, 'POST', data, additioinalHeaders);
  },

  put(url, data) {
    return request(url, 'put', data, additioinalHeaders);
  }
};
