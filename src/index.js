import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import store from './utils/store'
// import { Provider } from 'react-redux'
// import { persistStore } from 'redux-persist'
// import { PersistGate } from 'redux-persist/lib/integration/react'

// let persistor = persistStore(store)

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // <Provider store={store}>
  //     <PersistGate loading={null} persistor={persistor}>

  //     </PersistGate>
  // </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
