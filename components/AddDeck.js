import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addDeck } from '../actions/deck';
import { createDeck } from '../utils/api';

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 50,
    width: 300,
    borderColor: 'black',
    padding: 10,
    borderWidth: 1,
    marginTop: 40,
    borderRadius: 4,
    fontSize: 20,
  },
  addDeck: {
    backgroundColor: '#29AB87',
    height: 50,
    width: 250,
    marginTop: 20,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

class AddDeck extends Component {
  state = {
    input: '',
  }

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  handleSubmit = () => {
    const { input } = this.state;
    const { dispatch } = this.props;
    createDeck(input);
    dispatch(addDeck(input));
    this.setState({ input: '' });
  };

  render() {
    const { input } = this.state;
    return (
      <View style={styles.container}>
        <View>
          <Text style={{ fontSize: 40 }}> Add Deck title </Text>
        </View>
        <View>
          <TextInput
            style={styles.input}
            value={input}
            onChangeText={text => this.setState({ input: text })}
          />
        </View>
        <View>
          <TouchableOpacity
            activeOpacity={input === '' ? 1 : 0.5}
            style={styles.addDeck}
            onPress={this.handleSubmit}
            disabled={input === ''}
          >
            <Text style={{ color: 'white', fontSize: 20 }}> Add Deck </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default connect()(AddDeck);
