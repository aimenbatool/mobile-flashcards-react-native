import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';

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
    marginTop: 85,
  },
  counter: {
    marginTop: 100,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  passingScoreText: {
    color: 'green',
    fontSize: 40,
  },
  scoreBoardBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  scoreBoardActions: {
    paddingVertical: 20,
    paddingHorizontal: 40,
    backgroundColor: '#F8F8F8',
    borderWidth: 1,
    borderColor: 'black',
  },
};

class Quiz extends Component {
  state = {
    questions: this.shuffleQuestions(),
    currentQuestion: 0,
    correctAnswer: 0,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  }

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

  shuffleQuestions() {
    const { navigation } = this.props;
    const { cards } = navigation.state.params;

    for (let i = cards.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      // eslint-disable-next-line no-param-reassign
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
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

  correctAnswer() {
    this.setState(prevState => ({
      currentQuestion: prevState.currentQuestion + 1,
      correctAnswer: prevState.correctAnswer + 1,
    }));
    this.flipCard();
  }

  inCorrectAnswer() {
    this.setState(prevState => ({
      currentQuestion: prevState.currentQuestion + 1,
    }));
    this.flipCard();
  }

  resetQuiz() {
    this.setState(() => ({
      questions: this.shuffleQuestions(),
      currentQuestion: 0,
      correctAnswer: 0,
    }));
  }

  goBack() {
    const { navigation } = this.props;
    const backAction = NavigationActions.back();
    this.resetQuiz();
    navigation.dispatch(backAction);
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

    const { questions, currentQuestion, correctAnswer } = this.state;

    return (
      <View style={styles.container}>
        {
          currentQuestion < questions.length
            ? (
              <View>
                <View>
                  <Animated.View style={[styles.flipCard, frontAnimatedStyle]}>
                    <View style={styles.card}>
                      <Text style={{ fontSize: 30 }}>
                        {questions[currentQuestion].question}
                      </Text>
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
                        {questions[currentQuestion].answer}
                      </Text>
                      <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                          style={[styles.answerBtn, { borderBottomLeftRadius: 10, backgroundColor: '#ff6961' }]}
                          onPress={() => this.inCorrectAnswer()}
                        >
                          <Text style={{ fontSize: 20, textAlign: 'center', color: 'white' }}> Incorrect </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[styles.answerBtn, { borderBottomRightRadius: 10, backgroundColor: '#29AB87' }]}
                          onPress={() => this.correctAnswer()}
                        >
                          <Text style={{ fontSize: 20, textAlign: 'center', color: 'white' }}> Correct </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </Animated.View>
                </View>
                <View style={styles.counter}>
                  <Text>
                    {`${currentQuestion + 1} out of  ${questions.length}`}
                  </Text>
                </View>
              </View>
            )
            : (
              <View>
                <Text style={styles.passingScoreText}>
                    Passing Score:
                  {`${correctAnswer}/${questions.length}`}
                </Text>
                <View style={styles.scoreBoardBtn}>
                  <TouchableOpacity
                    onPress={() => this.goBack()}
                    style={[styles.scoreBoardActions,
                      { borderBottomLeftRadius: 4, borderTopLeftRadius: 4 }]}
                  >
                    <Text>
                        Back to deck
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.resetQuiz()}
                    style={[styles.scoreBoardActions,
                      { borderTopRightRadius: 4, borderBottomRightRadius: 4 }]}
                  >
                    <Text>
                        Reset Quiz
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )
        }
      </View>
    );
  }
}

export default Quiz;
