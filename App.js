import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import AddDeck from './components/AddDeck';
import DeckList from './components/DeckList';
import DeckView from './components/DeckView';

const Tabs = createBottomTabNavigator({
  Deck: {
    screen: DeckView,
  },
  DeckList: {
    screen: DeckList,
  },
});

// TODO: Add navigation
// eslint-disable-next-line no-unused-vars
const TabNavigator = createAppContainer(Tabs);

const App = () => (<TabNavigator />);
export default App;
