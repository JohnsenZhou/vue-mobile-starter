import * as types from '../mutation-types';
import * as jsonServices from '../../services/jsonholder';

// initial state
const state = {
  usersList: [],
};

// getters
const getters = {
  allUsers: state => state.usersList,
};

// actions
const actions = {
  getUsers({ commit, dispatch }) {
    jsonServices.getUsers().then((res) => {
      const usersList = res.data.data;
      const showSpinner = false;
      dispatch('doSpinner', showSpinner);
      commit(types.SAVE_USERS_LIST, { usersList });
    });
  },
};

// mutations
const mutations = {
  [types.SAVE_USERS_LIST] (state, { usersList }) {
    state.usersList = usersList;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
