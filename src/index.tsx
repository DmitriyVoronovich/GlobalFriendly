import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./redux/state";

ReactDOM.render(
    <App state={store.getState()}
         addPost={store.addPost.bind(store)}
         addMessage={store.addMessage.bind(store)}/>,
  document.getElementById('root')
);