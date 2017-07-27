import * as types from '../mutation-types';
import * as jsonServices from '../../services/jsonholder';

// initial state
const state = {
  usersList: [],
  showSpinner: true
};

// getters
const getters = {
  allUsers: state => state.usersList,
  isSpinner: state => state.showSpinner,
};

// actions
const actions = {
  getUsers({ commit }) {
    jsonServices.getUsers().then((res) => {
      const usersList = res.data.data;
      const showSpinner = false;
      // console.log(usersList)
      commit(types.SAVE_USERS_LIST, { usersList, showSpinner });
    });
  },
};

// mutations
const mutations = {
  [types.SAVE_USERS_LIST] (state, { usersList, showSpinner }) {
    state.usersList = usersList;
    state.showSpinner = showSpinner;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
