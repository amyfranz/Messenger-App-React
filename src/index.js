import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./login/login";
import SignUp from "./signup/signup";
import Dashboard from "./dashboard/dashboard";

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyDEUX2UzAgzwva0Cr_8UVtVQbnczcVLSRg",
  authDomain: "messenger-app-react.firebaseapp.com",
  databaseURL: "https://messenger-app-react.firebaseio.com",
  projectId: "messenger-app-react",
  storageBucket: "messenger-app-react.appspot.com",
  messagingSenderId: "1040626419703",
  appId: "1:1040626419703:web:d2fcba261b0fdad62350f2"
});

const routing = (
  <Router>
    <div id="routing-container">
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} />
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
