import { ADD_DECK, RECEIVE_DECKS } from '../actions/deck';

const deck = (state = {}, action) => {
  switch (action.type) {
    case ADD_DECK:
      return {
        ...state,
        [action.deck]: {
          title: action.deck,
          questions: [],
        },
      };
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks,
      };
    default:
      return state;
  }
};

export default deck;
