import {getData} from './api.js';

const picturesUsersBlock = document.querySelector('.pictures');
const picturesUsersTemplate = document.querySelector('#picture').content;
const template = picturesUsersTemplate.querySelector('.picture');

const renderSimilarPictures = (userPictures) => {
  const pictureFragment = document.createDocumentFragment();
  userPictures.forEach(({url, likes, comments}) => {
    const element = template.cloneNode(true);
    element.querySelector('img').src = url;
    element.querySelector('.picture__likes').textContent = likes;
    element.querySelector('.picture__comments').textContent = comments;
    pictureFragment.appendChild(element);
  });

  picturesUsersBlock.appendChild(pictureFragment);
};

picturesUsersBlock.classList.remove('visually-hidden');
getData(renderSimilarPictures);
