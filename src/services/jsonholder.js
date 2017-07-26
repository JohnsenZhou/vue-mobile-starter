import request from '../utils/request';


export async function getList() {
  return request('/replace/posts');
}

export async function getUser() {
  return request('/replace/users');
}
