import React from 'react';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import AddDeck from './components/AddDeck';
import DeckList from './components/DeckList';
import DeckView from './components/DeckView';
import AddCard from './components/AddCard';
import Quiz from './components/Quiz';

const Tabs = {
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Deck List',
      tabBarIcon: () => <Ionicons name="ios-list" size={32} color="black" />,
    },
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: () => <Ionicons name="ios-add" size={32} color="black" />
      ,
    },
  },
};

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

const tabNavigationPlatform = Platform.OS === 'ios'
  ? createBottomTabNavigator(Tabs, tabOptions)
  : createMaterialTopTabNavigator(Tabs, tabOptions);
const TabNavigator = createAppContainer(tabNavigationPlatform);

const Stack = createStackNavigator({
  Home: {
    screen: TabNavigator,
  },
  AddDeck: {
    screen: AddDeck,
  },
  DeckList: {
    screen: DeckList,
    navigationOptions: () => ({
      title: 'Deck List',
    }),
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: () => ({
      title: 'Deck',
    }),
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: () => ({
      title: 'Add Card',
    }),
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: () => ({
      title: 'Quiz',
    }),
  },
});

const StackNavigator = createAppContainer(Stack);
export default StackNavigator;
