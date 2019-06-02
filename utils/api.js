import { AsyncStorage } from 'react-native';

export const FLASHCARD_STORAGE_KEY = 'Udacity:FlashCards';

export const createDeck = deck => AsyncStorage.mergeItem(
  FLASHCARD_STORAGE_KEY,
  JSON.stringify({
    [deck]: {
      title: deck,
      cards: [],
    },
  }),
);

export const getDecks = () => AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then((results) => {
  const data = JSON.parse(results);
  return data;
});
