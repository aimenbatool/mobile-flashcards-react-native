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
    padding: 30,
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
    flexDirection: 'row',
  },
  answerBtn: {
    borderWidth: 1,
    padding: 10,
    width: 150,
    height: 50,
  },
};

const AnswerView = () => (
  <View style={styles.container}>
    <View style={styles.card}>
      <Text style={{ fontSize: 20, textAlign: 'justify' }}>
        React is a view library. It was created by Dan Abramov in 2015.
      </Text>
    </View>
    <View style={styles.answer}>
      <TouchableOpacity style={[styles.answerBtn, { borderBottomLeftRadius: 10, backgroundColor: '#ff6961' }]}>
        <Text style={{ fontSize: 20, textAlign: 'center', color: 'white' }}> Incorrect </Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.answerBtn, { borderBottomRightRadius: 10, backgroundColor: '#29AB87' }]}>
        <Text style={{ fontSize: 20, textAlign: 'center', color: 'white' }}> Correct </Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default AnswerView;
