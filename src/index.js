import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
// import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';

// const rootReducer = combineReducers({});

// const composeEnhancers =
//   process.env.NODE_ENV === 'development'
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     : null || compose;
// const store = createStore(
//   rootReducer,
//   /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
// );

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
