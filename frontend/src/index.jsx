import { Provider } from 'react-redux';
import store from './redux/store/store'

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line no-undef
  const { worker } = require('./service/msw/browser')
  worker.start()
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>

);

