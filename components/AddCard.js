import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCard } from '../actions/cards';
import { createCard } from '../utils/api';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    width: 300,
    height: 50,
    borderRadius: 4,
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  submit: {
    backgroundColor: '#29AB87',
    height: 50,
    width: 250,
    marginTop: 20,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class AddCard extends Component {
  state = {
    question: '',
    answer: '',
  }

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  handleSubmit = () => {
    const { question, answer } = this.state;
    const { dispatch, navigation } = this.props;
    const { deck } = navigation.state.params;
    createCard(question, answer, deck.title)
      .then(dispatch(addCard(question, answer, deck.title)))
      .then(navigation.navigate('DeckView'));
    this.setState({
      question: '',
      answer: '',
    });
  }

  handleChange = (value, label) => {
    this.setState({
      [label]: value,
    });
  }

  render() {
    const { question, answer } = this.state;
    return (
      <View style={styles.container}>
        <View style={{ alignItems: 'center' }}>
          <View>
            <Text style={{ fontSize: 40, marginBottom: 20 }}> Add Card </Text>
          </View>
          <TextInput
            style={styles.card}
            placeholder="Enter your question..."
            onChangeText={text => this.handleChange(text, 'question')}
            value={question}
          />
          <TextInput
            style={styles.card}
            placeholder="Enter your question..."
            onChangeText={text => this.handleChange(text, 'answer')}
            value={answer}
          />
          <TouchableOpacity style={styles.submit} onPress={this.handleSubmit}>
            <Text style={{ fontSize: 20, color: 'white' }}> SUBMIT </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default connect()(AddCard);
