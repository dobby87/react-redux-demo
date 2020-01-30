import React from "react";
import ReactDOM from "react-dom";
import "./static/styles/index.scss";

import { Provider } from "react-redux";

import configureStore from "./store";

import Routes from "./Routes";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
