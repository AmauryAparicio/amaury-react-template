import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./router/Routes";
import SubRouter from "./router/SubRouter";
import "./styles/styles.scss";

const App = () => {
  return (
    <Router>
      <SubRouter routes={Routes} />
    </Router>
  );
};

export default App;
