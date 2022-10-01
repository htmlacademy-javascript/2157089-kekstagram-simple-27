

function getRandomNumber(min, max) {

  if (Math.sign(min) === -1 || Math.sign(max) === -1 || min === max) {
    return NaN;
  }

  if (max < min) {
    const changeNumber = max;
    max = min;
    min = changeNumber;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
  // использован материал https://habr.com/ru/post/312880/
}

function checkLengthString (checkString, maxLength) {
  if (checkString.length < maxLength) {
    return true;
  }
  return false;
}

getRandomNumber(1, 10);
checkLengthString ('какой то текст для проверки длины', 50);

