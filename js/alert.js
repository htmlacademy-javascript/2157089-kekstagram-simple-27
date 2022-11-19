import {isEscapeKey} from './util.js';

const successMessage = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
const errorMessage = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
const successButton = successMessage.querySelector('.success__button');
const errorButton = errorMessage.querySelector('.error__button');

let typeMessage;

const onEscapeKeyPress = (evt) => {
  if(isEscapeKey(evt)) {
    onCloseButtonClick();
  }
};

const onMessageClose = (evt) => {
  if (evt.target === typeMessage) {
    onCloseButtonClick();
  }
};

function onCloseButtonClick() {
  typeMessage.remove();
  document.removeEventListener('keydown', onEscapeKeyPress);
  document.removeEventListener('click',onMessageClose);
}

const addEvent = () => {
  document.addEventListener('keydown', onEscapeKeyPress);
  document.addEventListener('click', onMessageClose);
};

const showSuccessMessage = () => {
  typeMessage = successMessage;
  document.body.append(successMessage);
  successButton.addEventListener('click', onCloseButtonClick);
  addEvent();
};

const showErrorMessage = () => {
  typeMessage = errorMessage;
  document.body.append(errorMessage);
  errorButton.addEventListener('click', onCloseButtonClick);
  addEvent();
};

export {showSuccessMessage, showErrorMessage};
