import * as types from '../mutation-types';
import * as jsonServices from '../../services/jsonholder';

// initial state
const state = {
  postsList: [],
};

// getters
const getters = {
  allPosts: state => state.postsList,
};

// actions
const actions = {
  getPosts({ commit }) {
    jsonServices.getPostsList().then((res) => {
      const postsList = res.data.data;
      console.log(postsList)
      commit(types.SAVE_POSTS_LIST, { postsList });
    });
  },
};

// mutations
const mutations = {
  [types.SAVE_POSTS_LIST] (state, { postsList }) {
    state.postsList = postsList;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
