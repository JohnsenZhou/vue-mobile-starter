import request from '../utils/request';


export async function getPostsList() {
  return request('/replace/posts');
}

export async function getPostDetail(id) {
  return request(`/replace/posts/${id}`);
}

export async function getPostComment(id) {
  return request(`/replace/posts/${id}/comments`);
}

export async function getUsers() {
  return request('/replace/users');
}

export async function getAlbums() {
  return request('/replace/albums');
}
