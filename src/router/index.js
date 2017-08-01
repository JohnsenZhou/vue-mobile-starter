import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Posts from '@/views/Posts';
import PostDetail from '@/views/PostDetail';
import Albums from '@/views/Albums';
import AlbumDetail from '@/views/AlbumDetail';
import Users from '@/views/Users';
import UserDetail from '@/views/UserDetail';
import UserTodos from '@/views/UserTodos';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'posts',
      component: Posts,
    },
    {
      path: '/posts/:postId',
      name: 'post-detail',
      component: PostDetail,
    },
    {
      path: '/albums',
      name: 'albums',
      component: Albums,
    },
    {
      path: '/albums/:albumId',
      name: 'album-detail',
      component: AlbumDetail,
    },
    {
      path: '/users',
      name: 'users',
      component: Users,
    },
    {
      path: '/users/:userId',
      name: 'user-detail',
      component: UserDetail,
      children: [
        {
          path: 'todo',
          name: 'user-todo',
          component: UserTodos,
        },
        {
          path: 'posts',
          name: 'user-posts',
          component: Hello,
        },
        {
          path: 'albums',
          name: 'user-albums',
          component: Hello,
        },
      ],
    },
  ],
});
