import request from '../utils/request';


export async function getPostsList() {
  return await request('/replace/posts');
}

export async function getPostDetail(id) {
  return await request(`/replace/posts/${id}`);
}

export async function updatePostDetail(values) {
  return await request(`/replace/posts/${values.id}`, {
    method: 'PUT',
    data: values,
  });
}

export async function getPostComment(id) {
  return await request(`/replace/posts/${id}/comments`);
}

export async function getUsers() {
  return await request('/replace/users');
}

export async function getUserDetail(userId) {
  return await request(`/replace/users/${userId}`);
}

export async function getUserTodoList(userId) {
  return await request(`/replace/users/${userId}/todos`);
}

export async function getUserPostList(userId) {
  return await request(`/replace/users/${userId}/posts`);
}

export async function getUserAlbumsList(userId) {
  return await request(`/replace/users/${userId}/albums`);
}

export async function getAlbums() {
  return await request('/replace/albums');
}

export async function getAlbumDetail(id) {
  return await request(`/replace/albums/${id}/photos`);
}
