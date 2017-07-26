import request from '../utils/request';


export function getList() {
  return request('/replace/posts');
}

export function getUser() {
  return request('/replace/users');
}
