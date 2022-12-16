import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import "./App.css";
import { store } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    {" "}
    <Provider store={store}>
      {" "}
      <PersistGate loading={null} persistor={persistor}>
        <App />{" "}
      </PersistGate>{" "}
    </Provider>{" "}
  </React.StrictMode>
);
