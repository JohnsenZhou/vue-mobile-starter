import * as types from '../mutation-types';
import * as jsonServices from '../../services/jsonholder';

// initial state
const state = {
  postsList: [],
  postDetail: {},
  formData: {
    title: '',
    body: '',
    id: 1,
    userId: 1,
  },
};

// getters
const getters = {
  allPosts: state => state.postsList,
  postDetail: state => state.postDetail,
};

// actions
const actions = {
  getPosts({ commit, dispatch }) {
    jsonServices.getPostsList().then((res) => {
      const postsList = res.data.data;
      const showSpinner = false;
      dispatch('doSpinner', showSpinner, { root: true });
      commit(types.SAVE_POSTS_LIST, { postsList });
    });
  },
  getPostDetail({ commit, dispatch }, postId) {
    jsonServices.getPostDetail(postId).then((res) => {
      const showSpinner = false;
      let postDetail = res.data.data;
      let comments = [];
      jsonServices.getPostComment(postId).then((res) => {
        comments = res.data.data;
        postDetail.comments = comments;
        dispatch('doSpinner', showSpinner, { root: true });
        commit(types.SAVE_POSTDETAIL, { postDetail })
      });
    });
  },
  resetDetail({ commit }) {
    commit(types.RESET_POSTDETAIL)
  },
  // updateDetail({ commit }, returnDetail) {
  //   commit(types.SAVE_POSTDETAIL, { postDetail: returnDetail });
  // }
};

// mutations
const mutations = {
  [types.SAVE_POSTS_LIST] (state, { postsList }) {
    state.postsList = postsList;
  },

  [types.SAVE_POSTDETAIL] (state, { postDetail }) {
    console.log(postDetail)
    state.postDetail = { ...state.postDetail, ...postDetail };
    state.formData = {
      title: postDetail.title,
      body: postDetail.body,
      id: postDetail.id,
      userId: postDetail.userId,
    };
  },

  [types.RESET_POSTDETAIL] (state) {
    state.postDetail = {};
  },

  UPDATE_TITLE(state, title) {
    state.formData.title = title;
  },

  UPDATE_BODY(state, body) {
    state.formData.body = body;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
};
