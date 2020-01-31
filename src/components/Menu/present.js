import React from "react";
import { NavLink } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";

import { MENU_TXT } from "../../constants/layout";

// style file name === class name
import styles from "./menu.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Menu = () => {
  // const dispatch = useDispatch();
  // get state
  // const { text, sagaText } = useSelector(state => state.test);

  return (
    <div className={cx("container")}>
      <ul className={cx("main-list")}>
        <li>
          <span>{MENU_TXT.HOME}</span>
        </li>
        <li>
          <span>{MENU_TXT.COURSE_SETTING.TITLE}</span>
          <ul>
            <li>a</li>
            <li>b</li>
          </ul>
        </li>
        <li>
          <span>{MENU_TXT.STUDENT_MANAGEMENT.TITLE}</span>
          <ul>
            <li>a</li>
            <li>b</li>
          </ul>
        </li>
        <li>
          <span>{MENU_TXT.ACADEMY_MANAGEMENT.TITLE}</span>
          <ul>
            <li>a</li>
            <li>b</li>
          </ul>
        </li>
        <li>
          <span>{MENU_TXT.AD_SETTING.TITLE}</span>
          <ul>
            <li>a</li>
            <li>b</li>
          </ul>
        </li>
        <li>
          <span>{MENU_TXT.STATISTICAL_REPORT.TITLE}</span>
          <ul>
            <li>a</li>
            <li>b</li>
          </ul>
        </li>
        <li>
          <span>{MENU_TXT.SERVICE_CENTER.TITLE}</span>
          <ul>
            <li>a</li>
            <li>b</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
