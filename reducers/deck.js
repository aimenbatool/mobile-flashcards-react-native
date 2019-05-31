import { ADD_DECK } from '../actions/deck';

const deck = (state = {}, action) => {
  switch (action.type) {
    case ADD_DECK:
      return {
        ...state,
        [action.deck]: {
          title: action.deck,
        },
      };
    default:
      return state;
  }
};

export default deck;
