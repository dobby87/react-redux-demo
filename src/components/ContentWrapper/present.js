import React from "react";
import { useSelector } from "react-redux";
import styles from "./content.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const ContentWrapper = ({ children }) => {
  const { isSimpleMainMenu } = useSelector(state => state.layout);
  return (
    <div className={cx("container", isSimpleMainMenu && "simplify")}>
      content{children}
    </div>
  );
};

export default ContentWrapper;
