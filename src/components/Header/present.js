import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { HEADER_TXT } from "../../constants/layout";
import { userMenuToggle, mainMenuToggle } from "../../store/layout/ducks";

// style file name === class name
import styles from "./header.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Header = () => {
  const dispatch = useDispatch();
  // get state
  const { isOpenUserMenu, isSimpleMainMenu } = useSelector(
    state => state.layout
  );
  const handleUserMenuClick = () => {
    dispatch(userMenuToggle());
  };
  const handleMainMenuButtonClick = () => {
    dispatch(mainMenuToggle());
  };

  return (
    <div className={cx("container")}>
      <div className={cx("l-wrap")}>
        <button
          className={cx("main-menu-btn", !isSimpleMainMenu && "active")}
          onClick={handleMainMenuButtonClick}
        >
          menu
        </button>
        <h1 className={cx("title")}>{HEADER_TXT.title}</h1>
      </div>
      <ul className={cx("r-wrap")}>
        <li>
          <button className={cx("contact-btn")}>contact button</button>
        </li>
        <li>
          <button className={cx("option-btn")}>option button</button>
        </li>
        <li>
          <button className={cx("user-menu-btn")} onClick={handleUserMenuClick}>
            user-menu-btn
          </button>
          <ul className={cx("action-panel", isOpenUserMenu && "active")}>
            <li>
              <NavLink to="/" activeStyle={{}}>
                정자핑크에듀영어학원
              </NavLink>
            </li>
            <li>
              <NavLink to="/" activeStyle={{}}>
                수내핑크에듀과학학원
              </NavLink>
            </li>
            <li>
              <NavLink to="/" activeStyle={{}}>
                {HEADER_TXT.myPage}
              </NavLink>
            </li>
            <li>
              <NavLink to="/" activeStyle={{}}>
                {HEADER_TXT.logOut}
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Header;
