import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/redux-store.js'
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

let rerenderEntireTree = (store) => {
  debugger;
  ReactDOM.render(
    <BrowserRouter >
    <Provider store={store}>
      <App store={store} dispatch={store.dispatch.bind(store)} />
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')
  );
}
rerenderEntireTree(store);
store.subscribe(() => {
  rerenderEntireTree(store);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
