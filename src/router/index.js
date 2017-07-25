import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import User from '@/components/User';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }
  ],
});
