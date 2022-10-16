import {testObjects} from './data.js';

const picturesUsersBlock = document.querySelector('.pictures__title');
picturesUsersBlock.classList.remove('visually-hidden');

const picturesBlock = document.querySelector('.pictures__title');
const picturesUsersTemplate = document.querySelector('#picture').content;
const template = picturesUsersTemplate.querySelector('.picture');
const pictureFragment = document.createDocumentFragment();

testObjects.forEach(({url, likes, comments}) => {
  const element = template.cloneNode(true);
  element.querySelector('img').src = url;
  element.querySelector('.picture__likes').textContent = likes;
  element.querySelector('.picture__comments').textContent = comments;
  pictureFragment.appendChild(element);
});

picturesBlock.appendChild(pictureFragment);

