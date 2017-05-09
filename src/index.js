import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise(), thunk, logger())(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.window-content'));

// ReactDOM.render(<App /> , document.querySelector('.window-content'));
