import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Posts from '@/views/Posts';
import PostDetail from '@/views/PostDetail';
import Albums from '@/views/Albums';
import Users from '@/views/Users';

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
      path: '/users',
      name: 'users',
      component: Users,
    },
    {
      path: '/users/:userId',
      name: 'user-detail',
      component: Hello,
    },
  ],
});
