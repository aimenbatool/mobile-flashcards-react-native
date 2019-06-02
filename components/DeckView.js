import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  deckView: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#89b4c4',
    justifyContent: 'center',
  },
  deckTitle: {
    height: 100,
    width: 280,
    backgroundColor: 'white',
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardCount: {
    backgroundColor: '#f1d3a1',
    width: 280,
    height: 40,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    height: 50,
    width: 160,
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
  },
  deleteDeck: {
    height: 50,
    width: 325,
    borderWidth: 1,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    marginTop: 10,
    backgroundColor: '#ff6961',
  },
});

class DeckView extends Component {
  static navigationOptions = {
    title: 'DeckView',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  }

  render() {
    const { navigation } = this.props;
    const { deck } = navigation.state.params;

    return (
      <View style={styles.deckView}>
        <View style={styles.deckTitle}>
          <Text style={{ fontSize: 20 }}>
            { deck.title }
          </Text>
        </View>
        <View style={styles.cardCount}>
          <Text>
            { `${deck.cards.length} cards` }
          </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <View>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                navigation.navigate(
                  'AddCard',
                  { key: deck.title },
                );
              }}
            >
              <Text style={{ fontSize: 18 }}>  Add Card </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.btn}>
              <Text style={{ fontSize: 18 }}> Start Quiz </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.deleteDeck}>
            <Text style={{ fontSize: 20, color: 'white' }}> Delete Deck </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default DeckView;
