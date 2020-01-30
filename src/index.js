import React from "react";
import ReactDOM from "react-dom";
import { ConnectedRouter } from "connected-react-router";

import "./static/styles/index.scss";

import { Provider } from "react-redux";

import configureStore, { history } from "./store";

import Routes from "./Routes";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
