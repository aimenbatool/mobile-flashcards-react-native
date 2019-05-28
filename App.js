import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import AddDeck from './components/AddDeck';
import DeckList from './components/DeckList';
import DeckView from './components/DeckView';
import AddQuestion from './components/AddQuestion';
import QuizView from './components/QuizView';

const Tabs = createBottomTabNavigator({
  QuizView: {
    screen: QuizView,
  },
  AddQuestion: {
    screen: AddQuestion,
  },
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
