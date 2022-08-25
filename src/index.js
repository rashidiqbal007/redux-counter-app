import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import the store
import store from "./store"
// import Provider and wrap around app so that store is accessible to any component from anywhere.
import {Provider} from "react-redux"

// get the state
store.subscribe(() => console.log(store.getState()));  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //  pass the store in the provider as a props AB KSI B COMPONENT/JSX SE CALL KRLO STORE KO
  <Provider store = {store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
