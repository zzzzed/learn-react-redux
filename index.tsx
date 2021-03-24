import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {createStore} from 'redux'
import reducer from './reducer'
import MainState from './state'
import {Provider} from 'react-redux'

// 通过Redux创建store对象
const store = createStore(reducer, MainState)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();

store.subscribe(() => {
  console.log('subscribe', store, store.getState())
})
