const getRandomNumber = (min, max) => {

  if (min < 0 || min > max) {
    return NaN;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
  // использован материал https://habr.com/ru/post/312880/
};

function checkLengthString (checkString, maxLength) {
  return checkString.length < maxLength;
}

getRandomNumber(1, 10);
checkLengthString ('какой то текст ', 50);

