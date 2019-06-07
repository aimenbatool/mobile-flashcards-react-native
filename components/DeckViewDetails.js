import React from 'react';
import { View, Text } from 'react-native';

const styles = {
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
};

// eslint-disable-next-line react/prop-types
const DeckViewDetails = ({ title, questions }) => (
  <View>
    <Text style={styles.deckText}>
      {title}
    </Text>
    <Text style={styles.cardNumber}>
      {questions.length === 1
        ? `${questions.length} Card`
        : `${questions.length} Cards`
      }
    </Text>
  </View>
);

export default DeckViewDetails;
