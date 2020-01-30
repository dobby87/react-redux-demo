import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TEST_CONSTANT_OBJ } from "../../constants/test";
import { testAction } from "../../store/test/ducks";
import { TEST_SAGA_ACTION } from "../../store/test/types";

// style file name === class name
import styles from "./header.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Header = () => {
  //
  const dispatch = useDispatch();
  // get state
  const { text, sagaText } = useSelector(state => state.test);

  // handlers
  const hadleClick = () => {
    dispatch(testAction("change"));
  };

  const hadleSagaClick = () => {
    console.log("hadleSagaClick");
    dispatch({
      type: TEST_SAGA_ACTION
    });
  };

  return (
    <div className={cx("container")}>
      tt
      <br />
      {text}
      <br />
      {sagaText}
      <br />
      {TEST_CONSTANT_OBJ.text1}
      <br />
      {TEST_CONSTANT_OBJ.text2}
      <button onClick={hadleClick}>dispatch</button>
      <button onClick={hadleSagaClick}>saga</button>
    </div>
  );
};

export default Header;
