import React from "react";
import Header from "../Header";
import Menu from "../Menu";
import ContentWrapper from "../ContentWrapper/present";

// style file name === class name
// import styles from "./header.module.scss";
// import classNames from "classnames/bind";

// const cx = classNames.bind(styles);

const Layout = ({ children, ...rest }) => {
  return (
    <>
      <Header />
      <Menu />
      <ContentWrapper>{children}</ContentWrapper>
    </>
  );
};

export default Layout;
