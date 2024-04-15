import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBr-Lp4D-Lh_FTpQO7LdywUT8S2Gg8LEkI",
  authDomain: "my-blog-app-31e85.firebaseapp.com",
  projectId: "my-blog-app-31e85",
  storageBucket: "my-blog-app-31e85.appspot.com",
  messagingSenderId: "934257711778",
  appId: "1:934257711778:web:9429447ba1048a69a795fb",
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
