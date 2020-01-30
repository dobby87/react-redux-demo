import React from "react";
// import { useDispatch } from "react-redux";

import styles from "./demo.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Demo = props => {
  //   const dispatch = useDispatch();
  console.log(props);
  const handleClick = () => {};
  return (
    <div className={cx("container")}>
      <div>
        <button onClick={handleClick}>go root</button>
      </div>
    </div>
  );
};

export default Demo;
