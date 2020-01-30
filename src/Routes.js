import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import Demo from "./components/Demo";

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={App} />
      <Route exact path="/demo" component={Demo} />
    </Router>
  );
};

export default Routes;
