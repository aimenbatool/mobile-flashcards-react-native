import ADD_CARD from '../actions/cards';

const deck = (state = {}, action) => {
  switch (action.type) {
    case ADD_CARD:
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
