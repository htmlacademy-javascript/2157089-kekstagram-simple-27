import {isEscapeKey} from './util.js';

const successMessage = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
const errorMessage = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
const successButton = successMessage.querySelector('.success__button');
const errorButton = errorMessage.querySelector('.error__button');

let typeMessage;

const onEscapeKey = (evt) => {
  if(isEscapeKey(evt)) {
    closeMessage();
  }
};

const onMessageClose = (evt) => {
  if (evt.target === typeMessage) {
    closeMessage();
  }
};

function closeMessage() {
  typeMessage.remove();
  document.removeEventListener('keydown', onEscapeKey, true);
  document.removeEventListener('click',onMessageClose);
}

const showSuccessMessage = () => {
  typeMessage = successMessage;
  document.body.append(successMessage);
  successButton.addEventListener('click', closeMessage);
  document.addEventListener('keydown', onEscapeKey, true);
  document.addEventListener('click', onMessageClose);
};

const showErrorMessage = () => {
  typeMessage = errorMessage;
  document.body.append(errorMessage);
  errorButton.addEventListener('click', closeMessage);
  document.addEventListener('keydown', onEscapeKey, true);
  document.addEventListener('click', onMessageClose);
};

export {showSuccessMessage, showErrorMessage};
