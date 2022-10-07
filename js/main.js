const getRandomNumber = (min, max) => {

  if (min < 0 || min > max) {
    return NaN;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
  // использован материал https://habr.com/ru/post/312880/
};

const checkLengthString = (checkString, maxLength) => checkString.length < maxLength;


checkLengthString ('какой то текст ', 50);

const testSizeArray = 25;
const likeGenMin = 15;
const likeGenMax = 200;
const commentsGenMax = 200;
const testObjects = [];

for (let i = 0; i < testSizeArray;) {
  i += 1;
  testObjects.push({
    id: i,
    url: `photos/${i}.jpg`,
    description: 'Описание фото номер',
    likes: getRandomNumber(likeGenMin, likeGenMax),
    comments: getRandomNumber(0, commentsGenMax),
  }
  );
}
