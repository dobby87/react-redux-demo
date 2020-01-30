import React from "react";
// import { useSelector, useDispatch } from "react-redux";

import styles from "./demo.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Demo = () => {
  return <div className={cx("container")}>demo</div>;
};

export default Demo;
