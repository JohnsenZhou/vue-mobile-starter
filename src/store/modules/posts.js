import * as types from '../mutation-types';
import * as jsonServices from '../../services/jsonholder';

// initial state
const state = {
  postsList: [],
  postDetail: {},
  updateTitle: '',
  updateBody: '',
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
      dispatch('doSpinner', showSpinner);
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
        dispatch('doSpinner', showSpinner);
        commit(types.SAVE_POSTDETAIL, { postDetail })
      });
    });
  },
  resetDetail({ commit }) {
    commit(types.RESET_POSTDETAIL)
  }
};

// mutations
const mutations = {
  [types.SAVE_POSTS_LIST] (state, { postsList }) {
    state.postsList = postsList;
  },

  [types.SAVE_POSTDETAIL] (state, { postDetail }) {
    state.postDetail = postDetail;
    state.updateTitle = postDetail.title;
    state.updateBody = postDetail.body;
  },

  [types.RESET_POSTDETAIL] (state) {
    state.postDetail = {};
  },

  UPDATE_TITLE(state, title) {
    state.updateTitle = title;
  },

  UPDATE_BODY(state, body) {
    state.updateBody = body;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
