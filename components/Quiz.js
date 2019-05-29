import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flipCard: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backfaceVisibility: 'hidden',
  },
  flipCardBack: {
    position: 'absolute',
    top: 0,
  },
  flipText: {
    width: 90,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
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
    height: 50,
    backgroundColor: '#29AB87',
    borderWidth: 0.5,
    borderColor: '#afafaf',
    width: 300,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
  },
  answerText: {
    fontSize: 20,
    textAlign: 'justify',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  answerBtn: {
    borderWidth: 1,
    padding: 10,
    width: 150,
    height: 50,
    marginTop: 70,
  },
};

class Quiz extends Component {
  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
    this.value = 0;
    this.animatedValue.addListener(({ value }) => {
      this.value = value;
    });
    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg'],
    });
    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg'],
    });
  }

  flipCard() {
    if (this.value >= 90) {
      Animated.spring(this.animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10,
      }).start();
    } else {
      Animated.spring(this.animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10,
      }).start();
    }
  }

  render() {
    const frontAnimatedStyle = {
      transform: [
        { rotateX: this.frontInterpolate },
      ],
    };

    const backAnimatedStyle = {
      transform: [
        { rotateX: this.backInterpolate },
      ],
    };

    return (
      <View style={styles.container}>
        <View>
          <Animated.View style={[styles.flipCard, frontAnimatedStyle]}>
            <View style={styles.card}>
              <Text style={{ fontSize: 30 }}> What is ReactJS? </Text>
            </View>
            <View style={styles.answer}>
              <TouchableOpacity onPress={() => this.flipCard()} style={{ padding: 10 }}>
                <Text
                  style={{ textAlign: 'center', fontSize: 20, color: 'white' }}
                >
                  Answer
                </Text>
              </TouchableOpacity>
            </View>
          </Animated.View>

          {/* Back */}
          <Animated.View style={[backAnimatedStyle, styles.flipCard, styles.flipCardBack]}>
            <View style={styles.card}>
              <Text style={styles.answerText}>
                React is a view library. It was created by Dan Abramov in 2015.
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={[styles.answerBtn, { borderBottomLeftRadius: 10, backgroundColor: '#ff6961' }]}>
                  <Text style={{ fontSize: 20, textAlign: 'center', color: 'white' }}> Incorrect </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.answerBtn, { borderBottomRightRadius: 10, backgroundColor: '#29AB87' }]}
                  onPress={() => this.flipCard()}
                >
                  <Text style={{ fontSize: 20, textAlign: 'center', color: 'white' }}> Correct </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Animated.View>
        </View>
      </View>
    );
  }
}

export default Quiz;
