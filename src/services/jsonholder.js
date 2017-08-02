import request from '../utils/request';


export async function getPostsList() {
  return request('/replace/posts');
}

export async function getPostDetail(id) {
  return request(`/replace/posts/${id}`);
}

export async function updatePostDetail(values) {
  return request(`/replace/posts/${values.id}`, {
    method: 'PUT',
    data: values,
  });
}

export async function getPostComment(id) {
  return request(`/replace/posts/${id}/comments`);
}

export async function getUsers() {
  return request('/replace/users');
}

export async function getUserDetail(userId) {
  return request(`/replace/users/${userId}`);
}

export async function getUserTodoList(userId) {
  return request(`/replace/users/${userId}/todos`);
}

export async function getUserPostList(userId) {
  return request(`/replace/users/${userId}/posts`);
}

export async function getUserAlbumsList(userId) {
  return request(`/replace/users/${userId}/albums`);
}

export async function getAlbums() {
  return request('/replace/albums');
}

export async function getAlbumDetail(id) {
  return request(`/replace/albums/${id}/photos`);
}
