import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { receiveDeck } from '../actions/deck';

const styles = StyleSheet.create({
  deck: {
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
  cardNumber: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10,
  },
  error: {
    fontSize: 30,
    textAlign: 'center',
  },
});

class DeckList extends Component {
  static propTypes = {
    deck: PropTypes.objectOf(PropTypes.object).isRequired,
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  }

  colors = ['#8e44ad', '#c0392b', '#f39c12', '#2c3e50', '#16a085', '#B53471', '#006266'];

  componentWillMount() {
    const { deck, dispatch } = this.props;
    dispatch(receiveDeck(deck));
  }

  render() {
    const { deck, navigation } = this.props;

    return (
      <ScrollView>
        {
        Object.keys(deck).length > 0
          ? Object.values(deck).map((d, index) => (
            <TouchableOpacity
              key={d.title}
              style={[styles.deck, { backgroundColor: this.colors[index % this.colors.length] }]}
              onPress={() => {
                navigation.navigate(
                  'DeckView',
                  { deck: d },
                );
              }}
            >
              <Text style={styles.deckText}>
                {d.title}
              </Text>
              <Text style={styles.cardNumber}>
                {d.questions.length}
              </Text>
            </TouchableOpacity>
          ))
          : <Text style={styles.error}> No deck available. </Text>
      }
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  const { deck } = state;
  return { deck };
};

export default connect(mapStateToProps)(DeckList);
