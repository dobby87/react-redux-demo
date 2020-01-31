import React from "react";
import Header from "../Header";
import Menu from "../Menu";

// style file name === class name
// import styles from "./header.module.scss";
// import classNames from "classnames/bind";

// const cx = classNames.bind(styles);

const Layout = () => {
  return (
    <>
      <Header />
      <Menu />
    </>
  );
};

export default Layout;
