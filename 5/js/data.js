import {getRandomNumber} from './util.js';

const TEST_SIZE_ARRAY = 25;
const LIKE_GEN_MIN = 15;
const LIKE_GEN_MAX = 200;
const COMMENTS_GEN_MAX = 200;
const testObjects = [];

for (let i = 0; i < TEST_SIZE_ARRAY;) {
  i += 1;
  testObjects.push({
    id: i,
    url: `photos/${i}.jpg`,
    description: 'Описание фото номер',
    likes: getRandomNumber(LIKE_GEN_MIN, LIKE_GEN_MAX),
    comments: getRandomNumber(0, COMMENTS_GEN_MAX),
  }
  );
}

export {testObjects};
