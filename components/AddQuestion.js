import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  question: {
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

class AddQuestion extends Component {
  state = {
    question: '',
    answer: '',
  }

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  render() {
    const { question, answer } = this.state;
    const { navigation } = this.props;
    const { key } = navigation.state.params;
    return (
      <View style={styles.container}>
        <View style={{ alignItems: 'center' }}>
          <View>
            <Text style={{ fontSize: 40, marginBottom: 20 }}> Add Card </Text>
          </View>
          <TextInput
            style={styles.question}
            placeholder="Enter your question..."
            onChangeText={text => this.setState({ question: text })}
            value={question}
          />
          <TextInput
            style={styles.question}
            placeholder="Enter your question..."
            onChangeText={text => this.setState({ answer: text })}
            value={answer}
          />
          <Text>
            { key }
          </Text>
          <TouchableOpacity style={styles.submit}>
            <Text style={{ fontSize: 20, color: 'white' }}> SUBMIT </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default AddQuestion;
