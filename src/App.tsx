import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./router/Routes";
import SubRouter from "./router/SubRouter";
import store from "./store/store";
import "./styles/styles.scss";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <SubRouter routes={Routes} />
      </Router>
    </Provider>
  );
};

export default App;
