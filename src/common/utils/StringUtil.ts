export const capitalizeWord = (word: string): string => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const capitalizeSentence = (sentence: string): string => {
  const wordList = sentence.split(' ');
  return wordList.map((word) => (shouldWordBeCapitalized(word) ? capitalizeWord(word) : word.toLowerCase())).join(' ');
};

export const shouldWordBeCapitalized = (word: string): boolean => {
  const uppercaseWord = word.toUpperCase();
  return !(uppercaseWord === 'OF');
};

export const isEmail = (email: string): boolean => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
