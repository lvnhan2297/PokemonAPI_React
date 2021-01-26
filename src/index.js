import '@babel/polyfill';
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { Provider } from 'react-redux';
import store from './store';
import './index.scss';

const Main = () => {
  return (
    <>
      <Provider store={store}>
        <App />
      </Provider>
    </>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));