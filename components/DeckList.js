import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { receiveDecks } from '../actions/deck';
import { getDecks } from '../utils/api';
import DeckViewDetails from './DeckViewDetails';

const styles = StyleSheet.create({
  deck: {
    height: 150,
    alignItems: 'stretch',
    backgroundColor: 'red',
    flexDirection: 'column',
  },
  error: {
    fontSize: 30,
    textAlign: 'center',
  },
});

class DeckList extends Component {
  state = {
    ready: false,
  }

  static propTypes = {
    decks: PropTypes.objectOf(PropTypes.object).isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    receiveDecks: PropTypes.func.isRequired,
  }

  colors = ['#8e44ad', '#c0392b', '#f39c12', '#2c3e50', '#16a085', '#B53471', '#006266'];

  componentWillMount() {
    // eslint-disable-next-line no-shadow
    const { receiveDecks } = this.props;
    getDecks()
      .then(decks => receiveDecks(decks))
      .then(() => {
        this.setState({ ready: true });
      });
  }

  render() {
    const { decks, navigation } = this.props;
    const { ready } = this.state;
    if (!ready) {
      return (
        <View>
          <Text> Loading... </Text>
        </View>
      );
    }

    return (
      <ScrollView>
        { ready && Object.keys(decks).length > 0
          ? Object.values(decks).map((d, index) => (
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
              <DeckViewDetails title={d.title} questions={d.cards} />
            </TouchableOpacity>
          ))
          : <Text style={styles.error}> No deck available. </Text>
      }
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({ decks: state.decks });

const mapDispatchToProps = dispatch => ({
  receiveDecks: decks => dispatch(receiveDecks(decks)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeckList);
