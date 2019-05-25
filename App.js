import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import AddDeck from './components/AddDeck';
import DeckList from './components/DeckList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

const Tabs = createBottomTabNavigator({
  DeckList: {
    screen: DeckList,
  },
  AddDeck: {
    screen: AddDeck,
  },
});

// TODO: Add navigation
// eslint-disable-next-line no-unused-vars
const TabNavigator = createAppContainer(Tabs);

const App = () => (
  <View style={styles.container}>
    <DeckList />
  </View>
);

export default App;
