import { USER_MENU_TOGGLE, MAIN_MENU_TOGGLE } from "./types";

// actions
export const userMenuToggle = payload => ({
  type: USER_MENU_TOGGLE
});

export const mainMenuToggle = payload => ({
  type: MAIN_MENU_TOGGLE
});

// initial state
const initialState = {
  isOpenUserMenu: false,
  isSimpleMainMenu: false
};

// reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case USER_MENU_TOGGLE:
      return {
        ...state,
        isOpenUserMenu: !state.isOpenUserMenu
      };
    case MAIN_MENU_TOGGLE:
      return {
        ...state,
        isSimpleMainMenu: !state.isSimpleMainMenu
      };
    default:
      return state;
  }
};

export default reducer;
