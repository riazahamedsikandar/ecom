import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App.jsx";
import store from "./redux/store.jsx"; // Import your Redux store

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render( <
    Provider store = { store } >
    <
    App / >
    <
    /Provider>
);