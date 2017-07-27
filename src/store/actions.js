import * as types from './mutation-types';

export const doSpinner = ({ commit }, showSpinner) => {
  commit(types.SAVE_SHOWSPINNER, showSpinner);
};

export const resetSpinner = ({ commit }) => {
  commit(types.RESET_SHOWSPINNER);
};
