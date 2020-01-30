import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DEMO_REQUEST } from "../../store/demo/types";
import styles from "./demo.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Demo = () => {
  const dispatch = useDispatch();
  const [localState, setLocalState] = useState("localState");
  const { str, obj, arr } = useSelector(state => state.demo);

  const onLocalStateButtonClick = () => {
    setLocalState("changed local State");
  };

  // const onAsyncActionTestButtonClick = useCallback(() => {
  //   dispatch({
  //     type: DEMO_REQUEST
  //   });
  // }, [dispatch]);

  const onAsyncActionTestButtonClick = () => {
    dispatch({
      type: DEMO_REQUEST
    });
  };

  return (
    <div className={cx("container")}>
      <div>title: {obj.title}</div>
      <div>str: {str}</div>

      <div>
        arr:
        {arr.map(item => (
          <div key={item}>{item}</div>
        ))}
      </div>
      <br />
      <div>localState: {localState}</div>

      <br />
      <div>
        <button onClick={onLocalStateButtonClick}>local state test btn</button>
      </div>
      <div>
        {/* <button onClick={onGlobalStateTestButtonClick}>
          global state test btn
        </button> */}
      </div>
      <div>
        <button onClick={onAsyncActionTestButtonClick}>
          async action test btn
        </button>
      </div>
    </div>
  );
};

export default Demo;
