import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { RouterApp } from "./router/RouterApp";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <RouterApp />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
