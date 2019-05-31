import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import AddDeck from './components/AddDeck';
import DeckList from './components/DeckList';
import reducer from './reducers';
import middleware from './middleware';

const tabOptions = {
  navigationOptions: {
    header: null,
  },
  tabBarOptions: {
    activeTintColor: 'black',
    labelStyle: { fontSize: 18 },
    style: {
      height: 56,
      backgroundColor: '#f6f5f5',
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 6,
      shadowOpacity: 1,
    },
  },
};

const Tabs = createBottomTabNavigator({
  AddDeck: {
    screen: AddDeck,
  },
  DeckList: {
    screen: DeckList,
  },
}, tabOptions);

const TabNavigator = createAppContainer(Tabs);

const store = createStore(reducer, composeWithDevTools(middleware));

// eslint-disable-next-line no-debugger
// debugger;

const App = () => (
  <Provider store={store}>
    <TabNavigator />
  </Provider>
);

export default App;
