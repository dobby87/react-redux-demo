import { USER_MENU_TOGGLE } from "./types";

// actions
export const userMenuToggle = payload => ({
  type: USER_MENU_TOGGLE
});

// initial state
const initialState = {
  isOpenUserMenu: false
};

// reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case USER_MENU_TOGGLE:
      return {
        ...state,
        isOpenUserMenu: !state.isOpenUserMenu
      };
    default:
      return state;
  }
};

export default reducer;
