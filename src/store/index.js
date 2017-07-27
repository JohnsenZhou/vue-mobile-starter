import Vue from 'vue';
import Vuex from 'vuex';
import posts from './modules/posts';
import albums from './modules/albums';
import users from './modules/users';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    posts,
    albums,
    users,
  },
})
