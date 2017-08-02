import * as types from '../mutation-types';
import * as jsonServices from '../../services/jsonholder';

// initial state
const state = {
  usersList: [],
  userDetail: {},
  userTodos: [],
};

// getters
const getters = {
  allUsers: state => state.usersList,
  userDetail: state => state.userDetail,
  userTodos: state => state.userTodos,
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
  getUserDetail({ commit, dispatch }, userId) {
    jsonServices.getUserDetail(userId).then((res) => {
      const userDetail = res.data.data;
      const showSpinner = false;
      dispatch('doSpinner', showSpinner);
      commit(types.SAVE_USERS_DETAIL, { userDetail });
    });
  },
  getUserTodoList({ commit, dispatch }, userId) {
    jsonServices.getUserTodoList(userId).then((res) => {
      const userTodos = res.data.data;
      commit(types.SAVE_USERS_TODOS, { userTodos });
    })
  }
};

// mutations
const mutations = {
  [types.SAVE_USERS_LIST] (state, { usersList }) {
    state.usersList = usersList;
  },

  [types.SAVE_USERS_DETAIL] (state, { userDetail }) {
    state.userDetail = userDetail;
  },

  [types.SAVE_USERS_TODOS] (state, { userTodos }) {
    state.userTodos = userTodos;
  },

  [types.RESET_USER_DETAIL] (state) {
    state.userDetail = {};
    state.userTodos = [];
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};
