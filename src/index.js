import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ContextProvider } from "./context/Context";
ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
      <PORT />
      <HOST />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root"));
const PORT = process.env.development || 3000;
const HOST = "https://react-deloy.herokuapp.com/";

