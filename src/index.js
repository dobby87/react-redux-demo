import React from "react";
import ReactDOM from "react-dom";

import "./static/styles/index.scss";

import { Provider } from "react-redux";

import configureStore, { sagaMiddleware, rootSaga } from "./store";

import Routes from "./Routes";

const store = configureStore();

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
