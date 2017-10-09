import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Immutable from 'immutable';
import reducer from './reducer';
import{  WrappedApp } from './containers';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const initAppState = Immutable.fromJS(
  { squares: [], // NOTE: becomes an Immutable List!
    sequence: 0
  });

const store = createStore(reducer, initAppState);

ReactDOM.render(
  <Provider store={store}>
    <WrappedApp />
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
