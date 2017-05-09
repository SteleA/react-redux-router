import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import AppComponent from './containers/App';

const routes = (
  <Provider store={store}>
    <BrowserRouter>
      <Route path="*" component={AppComponent} />
    </BrowserRouter>
  </Provider>
);

export default routes;
