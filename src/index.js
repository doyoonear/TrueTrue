import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import Reset from "./Styles/reset";

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./store/reducers";

const store = createStore(rootReducer);

ReactDOM.render(
  <>
    <Provider store={store}>
      <Reset /> <Routes />
    </Provider>
  </>,
  document.getElementById("root")
);
