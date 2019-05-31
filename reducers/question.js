import ADD_QUESTION from '../actions/question';

const deck = (state = {}, action) => {
  switch (action.type) {
    case ADD_QUESTION:
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
