import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import TodoApp from "./TodoApp";

import "./index.css";

import reduxReducer from "./reduxReducer";

const store = createStore(reduxReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  rootElement
);
