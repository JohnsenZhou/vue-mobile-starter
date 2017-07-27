import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import { state } from './state';
import { mutations } from './mutations';
import posts from './modules/posts';
import albums from './modules/albums';
import users from './modules/users';

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    posts,
    albums,
    users,
  },
})
