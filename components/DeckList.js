import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import { receiveDeck } from '../actions/deck';

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
  cardNumber: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10,
  },
});

class DeckList extends Component {
  // colors = ['green', 'yellow', 'red', 'blue', 'orange', 'pink', 'cyan'];
  colors = ['#8e44ad', '#c0392b', '#f39c12', '#2c3e50', '#16a085', '#B53471', '#006266'];

  static propTypes = {
    deck: PropTypes.objectOf(PropTypes.object).isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  componentWillMount() {
    const { deck, dispatch } = this.props;
    dispatch(receiveDeck(deck));
  }

  render() {
    const { deck } = this.props;

    return (
      <ScrollView>
        {
        Object.values(deck).map((d, index) => (
          <View
            key={d.title}
            style={[styles.deck, { backgroundColor: this.colors[index % this.colors.length] }]}
          >
            <Text style={styles.deckText}>
              {d.title}
            </Text>
            <Text style={styles.cardNumber}>
              {d.questions.length}
            </Text>
          </View>
        ))
      }
      </ScrollView>
    );
  }
}

// DeckList.defaultProps = {
//   deck: PropTypes.objectOf(PropTypes.string).isRequired,
// };

const mapStateToProps = (state) => {
  const { deck } = state;
  return { deck };
};

export default connect(mapStateToProps)(DeckList);
