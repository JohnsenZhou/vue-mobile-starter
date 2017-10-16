import * as types from '../mutation-types';
import * as jsonServices from '../../services/jsonholder';

// initial state
const state = {
  albumsList: [],
  albumDetail: [],
};

// getters
const getters = {
  allAlbums: state => state.albumsList,
  albumDetail: state => state.albumDetail,
};

// actions
const actions = {
  getAlbums({ commit, dispatch }) {
    jsonServices.getAlbums().then((res) => {
      const albumsList = res.data.data;
      // console.log(albumsList)
      const showSpinner = false;
      dispatch('doSpinner', showSpinner, { root: true });
      commit(types.SAVE_ALBULMS_LIST, { albumsList });
    });
  },
  getAlbumDetail({ commit, dispatch }, albumId) {
    jsonServices.getAlbumDetail(albumId).then((res) => {
      const albumDetail = res.data.data;
      const showSpinner = false;
      dispatch('doSpinner', showSpinner, { root: true });
      commit(types.SAVE_ALBUMDETAIL, { albumDetail });
    });
  },
  resetAlbumDetail({ commit }) {
    commit(types.RESET_ALBUMDETAIL);
  }
};

// mutations
const mutations = {
  [types.SAVE_ALBULMS_LIST] (state, { albumsList }) {
    state.albumsList = albumsList;
  },

  [types.SAVE_ALBUMDETAIL] (state, { albumDetail }) {
    state.albumDetail = albumDetail;
  },

  [types.RESET_ALBUMDETAIL] (state) {
    state.albumDetail = [];
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
};
