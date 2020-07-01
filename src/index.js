import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider }  from 'react-redux'
import {createStore } from 'redux'
import CartReducer from './Reducer/CartReducer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"
import "react-input-range/lib/css/index.css"

const store =createStore(CartReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}><App/></Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
