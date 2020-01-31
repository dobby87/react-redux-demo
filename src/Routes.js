import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import Demo from "./components/Demo";
import Layout from "./components/Layout";

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={App} />
      <Route exact path="/demo" component={Demo} />
      <Route exact path="/layout" component={Layout} />
    </Router>
  );
};

export default Routes;
