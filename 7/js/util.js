const getRandomNumber = (min, max) => {

  if (min < 0 || min > max) {
    return NaN;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
  // использован материал https://habr.com/ru/post/312880/
};

// const checkLengthString = (checkString, maxLength) => checkString.length < maxLength;
const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomNumber, isEscapeKey};
