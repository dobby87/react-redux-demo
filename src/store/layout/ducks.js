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
  isSimpleMainMenu: false,
  mainMenu: [
    {
      title: "홈"
    },
    {
      title: "수강설정",
      subMenu: [
        {
          title: "수강설정 서브메뉴1",
          path: "/",
          isActive: false
        },
        {
          title: "수강설정 서브메뉴2",
          path: "/",
          isActive: false
        }
      ]
    },
    {
      title: "원생관리",
      subMenu: [
        {
          title: "원생관리 서브메뉴1",
          path: "/",
          isActive: false
        },
        {
          title: "원생관리 서브메뉴2",
          path: "/",
          isActive: false
        }
      ]
    },
    {
      title: "학원관리",
      subMenu: [
        {
          title: "학원관리 서브메뉴1",
          path: "/",
          isActive: false
        },
        {
          title: "학원관리 서브메뉴2",
          path: "/",
          isActive: false
        }
      ]
    },
    {
      title: "광고설정",
      subMenu: [
        {
          title: "광고설정 서브메뉴1",
          path: "/",
          isActive: false
        },
        {
          title: "광고설정 서브메뉴2",
          path: "/",
          isActive: false
        }
      ]
    },
    {
      title: "통계보고서",
      subMenu: [
        {
          title: "통계보고서 서브메뉴1",
          path: "/",
          isActive: false
        },
        {
          title: "통계보고서 서브메뉴2",
          path: "/",
          isActive: false
        }
      ]
    },
    {
      title: "고객센터",
      subMenu: [
        {
          title: "고객센터 서브메뉴1",
          path: "/",
          isActive: false
        },
        {
          title: "고객센터 서브메뉴2",
          path: "/",
          isActive: false
        }
      ]
    }
  ]
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
