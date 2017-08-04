import axios from 'axios';
import Promise from 'es6-promise';

if (!window.Promise) {
  window.Promise = Promise;
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export default function request(url, options) {
  let headers = {};
  if (options && options.method !== 'GET') {
    headers = {
      'content-type': 'application/json',
    };
  }
  return axios(url, { ...options, headers, withCredentials: true })
    .then(checkStatus)
    .then(data => ({ data }))
    .catch(err => ({ err }));
}
