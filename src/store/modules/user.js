import * as types from '../mutation-types';
import * as jsonServices from '../../services/jsonholder';

// initial state
const state = {
  userList: [],
  photoList: [],
};

// getters
const getters = {
  allUsers: state => state.userList,
};

// actions
const actions = {
  getUsers({ commit }) {
    jsonServices.getList().then((res) => {
      const userList = res.data.data;
      console.log(userList)
      commit(types.SAVE_USERS_LIST, { userList });
    });
  },
};

// mutations
const mutations = {
  [types.SAVE_USERS_LIST] (state, { userList }) {
    state.userList = userList;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
