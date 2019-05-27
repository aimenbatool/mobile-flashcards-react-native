import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import AddDeck from './components/AddDeck';
import DeckList from './components/DeckList';
import DeckView from './components/DeckView';

const Tabs = createBottomTabNavigator({
  AddDeck: {
    screen: AddDeck,
  },
  Deck: {
    screen: DeckView,
  },
  DeckList: {
    screen: DeckList,
  },
});

const TabNavigator = createAppContainer(Tabs);

const App = () => (<TabNavigator />);
export default App;
