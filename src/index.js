import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import 'tachyons';

import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import { requestLaunchData, searchDataList, requestLaunchYear } from './reducers'

import './index.css';

const logger = createLogger()
const Middlewares = [thunkMiddleware]

if (process.env.NODE_ENV === 'development') {
  Middlewares.push(logger)
}

const rootReducers = combineReducers({ requestLaunchData, searchDataList, requestLaunchYear })

const store = createStore(rootReducers, applyMiddleware(...Middlewares))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
