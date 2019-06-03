import { ADD_DECK, RECEIVE_DECKS, DELETE_DECKS } from '../actions/deck';
import { ADD_CARD } from '../actions/cards';

const decks = (state = {}, action) => {
  switch (action.type) {
    case ADD_DECK:
      return {
        ...state,
        [action.deck]: {
          title: action.deck,
          cards: [],
        },
      };
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks,
      };
    case DELETE_DECKS:
      return {
        ...action.decks,
      };
    case ADD_CARD:
      return {
        ...state,
        [action.deck]: {
          ...state[action.deck],
          cards: [
            ...state[action.deck].cards,
            {
              question: action.question,
              answer: action.answer,
            },
          ],
        },
      };
    default:
      return state;
  }
};

export default decks;
