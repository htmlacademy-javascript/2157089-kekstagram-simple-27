const getRandomNumber = (min, max) => {

  if (min < 0 || min > max) {
    return NaN;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
  // использован материал https://habr.com/ru/post/312880/
};

const checkLengthString = (checkString, maxLength) => checkString.length < maxLength;


checkLengthString ('какой то текст ', 50);


const testObjects = [];

for (let i = 1; i <= 25; i++) {
  testObjects[i] = {
    id: (i),
    url: `photos/${i}.jpg`,
    description: 'Описание фото номер',
    likes: getRandomNumber(15, 200),
    comments: getRandomNumber(0, 200),
  };
}
