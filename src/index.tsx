import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const postsData = [
    {id: 1, message: 'Hi, how are you?', like: 15},
    {id: 1, message: 'It\'s my first post!', like: 20}
]

const dialogData = [
    {id: 1, name: 'Dmitriy'},
    {id: 2, name: 'Oleg'},
    {id: 3, name: 'Kate'},
    {id: 4, name: 'Oly'},
    {id: 5, name: 'Igor'},
    {id: 6, name: 'Pavel'}
]

const messageData = [
    {id: 1, message: ' Hi, how are you?'},
    {id: 2, message: 'Yo'},
    {id: 3, message: 'GG'}
]

ReactDOM.render(
    <App posts={postsData} dialog={dialogData} message={messageData}/>,
  document.getElementById('root')
);