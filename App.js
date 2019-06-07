import React from 'react';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import middleware from './middleware';
import StackNavigator from './routes';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(middleware));

const App = () => (
  <Provider store={store}>
    <StackNavigator />
  </Provider>
);

export default App;
