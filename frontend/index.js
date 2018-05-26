import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './root_reducer';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Protected from './components/protected';
import App from './components/app';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

render(
  <Provider store={store}>
    <BrowserRouter>
        <Protected>
            <Route path='/' component={App} />
        </Protected>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
