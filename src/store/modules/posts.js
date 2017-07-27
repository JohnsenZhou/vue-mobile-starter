import * as types from '../mutation-types';
import * as jsonServices from '../../services/jsonholder';

// initial state
const state = {
  postsList: [],
  postDetail: {}
};

// getters
const getters = {
  allPosts: state => state.postsList,
  postDetail: state => state.postDetail,
};

// actions
const actions = {
  getPosts({ commit }) {
    jsonServices.getPostsList().then((res) => {
      const postsList = res.data.data;
      // console.log(postsList)
      commit(types.SAVE_POSTS_LIST, { postsList });
    });
  },
  getPostDetail({ commit }, postId) {
    jsonServices.getPostDetail(postId).then((res) => {
      // console.log(res.data.data)
      const postDetail = res.data.data;
      commit(types.SAVE_POSTDETAIL, { postDetail })
    })
  }
};

// mutations
const mutations = {
  [types.SAVE_POSTS_LIST] (state, { postsList }) {
    state.postsList = postsList;
  },

  [types.SAVE_POSTDETAIL] (state, { postDetail }) {
    state.postDetail = postDetail;
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};
