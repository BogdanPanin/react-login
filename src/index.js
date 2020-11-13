import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyCp7suuzx0yrghyyIWy_M9RUKEwxPvY09g",
  authDomain: "react-authorization-bd.firebaseapp.com",
  databaseURL: "https://react-authorization-bd.firebaseio.com",
  projectId: "react-authorization-bd",
  storageBucket: "react-authorization-bd.appspot.com",
  messagingSenderId: "1089343045250",
  appId: "1:1089343045250:web:5fbc957b1c9460e4933e9b",
  measurementId: "G-EC1VP0KK3V",
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
