import * as types from './mutation-types';

export const mutations = {
  [types.SAVE_SHOWSPINNER] (state, showSpinner) {
    state.showSpinner = showSpinner;
  },
  
  [types.RESET_SHOWSPINNER] (state) {
    state.showSpinner = true;
  }
};
