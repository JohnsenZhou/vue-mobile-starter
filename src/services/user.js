import request from '../utils/request';


export function fetch() {
  return request('/api/api/catalogs?client=1');
}

export function push(values) {
  return request('/api/api/catalogs', {
    method: 'post',
    data: JSON.stringify(values),
  });
}
