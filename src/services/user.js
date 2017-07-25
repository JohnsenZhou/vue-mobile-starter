import request from '../utils/request';


export function fetch() {
  return request('/replace/api/catalogs?client=1');
}

export function push(values) {
  return request('/replace/api/catalogs', {
    method: 'post',
    data: JSON.stringify(values)
  })
}