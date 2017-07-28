import * as types from '../mutation-types';
import * as jsonServices from '../../services/jsonholder';

// initial state
const state = {
  albumsList: [],
};

// getters
const getters = {
  allAlbums: state => state.albumsList,
};

// actions
const actions = {
  getAlbums({ commit, dispatch }) {
    jsonServices.getAlbums().then((res) => {
      const albumsList = res.data.data;
      // console.log(albumsList)
      const showSpinner = false;
      dispatch('doSpinner', showSpinner);
      commit(types.SAVE_ALBULMS_LIST, { albumsList });
    });
  },
};

// mutations
const mutations = {
  [types.SAVE_ALBULMS_LIST] (state, { albumsList }) {
    state.albumsList = albumsList;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
