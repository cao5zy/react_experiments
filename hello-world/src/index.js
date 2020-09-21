import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const reducer1 = (state = {}, action)=>{
  switch(action.type){
  case "showMsg":{
    const {data:{name}} = action;
    console.log('handled in reducer1');
    return {...state, alert: "hello " + name} 
  }
  default: return state;
  }  
};

const reducer2 = (state = {}, action)=>{
  switch(action.type){
    case "showMsg": {
      console.log('handled in reducer2');
      return {...state, alert: "hello1"}
    }
  default: return state;
  }
};

const reducer = combineReducers({ reducer1, reducer2});

const store = createStore(reducer, {alert: "alert in index"});

ReactDOM.render(<Provider store={store}> <App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
