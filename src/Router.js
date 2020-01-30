import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";

const Router = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={App} />
    </BrowserRouter>
  );
};

export default Router;
