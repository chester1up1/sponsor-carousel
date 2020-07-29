import React from "react";
import ReactDOM from "react-dom";
import ConfigPage from "./components/ConfigPage/ConfigPage";
import { Provider } from "react-redux";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Provider store={store}>
    <ConfigPage />
  </Provider>,
  document.getElementById("root")
);
