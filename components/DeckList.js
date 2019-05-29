import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

const styles = StyleSheet.create({
  deck: {
    // width: 200,
    height: 150,
    alignItems: 'stretch',
    backgroundColor: 'red',
    flexDirection: 'column',
  },
  deckText: {
    fontSize: 40,
    color: 'white',
    fontFamily: 'Menlo-Bold',
    textAlign: 'center',
    marginTop: 50,
  },
});

const DeckList = () => (
  <ScrollView>
    <View style={[styles.deck, { backgroundColor: '#548999' }]}>
      <Text style={styles.deckText}> Vanila JS </Text>
    </View>
    <View style={[styles.deck, { backgroundColor: '#dd7035' }]}>
      <Text style={styles.deckText}> Redux </Text>
    </View>
    <View style={[styles.deck, { backgroundColor: '#548999' }]}>
      <Text style={styles.deckText}> Vanila JS </Text>
    </View>
    <View style={[styles.deck, { backgroundColor: '#f1d3a1' }]}>
      <Text style={styles.deckText}> PHP </Text>
    </View>
    <View style={[styles.deck, { backgroundColor: '#bd937d' }]}>
      <Text style={styles.deckText}> Java </Text>
    </View>
    <View style={[styles.deck, { backgroundColor: '#548999' }]}>
      <Text style={styles.deckText}> Vanila JS </Text>
    </View>
    <View style={[styles.deck, { backgroundColor: '#dd7035' }]}>
      <Text style={styles.deckText}> Redux </Text>
    </View>
  </ScrollView>
);

export default DeckList;
