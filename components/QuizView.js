import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#f8f8fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    height: 260,
    width: 300,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderWidth: 0.5,
    borderColor: '#afafaf',
    justifyContent: 'center',
    alignItems: 'center',
  },
  answer: {
    height: 50,
    backgroundColor: '#29AB87',
    borderWidth: 0.5,
    borderColor: '#afafaf',
    width: 300,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
  },
};

const QuizView = () => (
  <View style={styles.container}>
    <View style={styles.card}>
      <Text style={{ fontSize: 30 }}> What is ReactJS? </Text>
    </View>
    <View style={styles.answer}>
      <TouchableOpacity>
        <Text style={{ textAlign: 'center', fontSize: 20, color: 'white' }}> Answer </Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default QuizView;
