export const ADD_CARD = 'ADD_CARD';

export const addCard = (question, answer, deck) => ({
  type: ADD_CARD,
  question,
  answer,
  deck,
});
