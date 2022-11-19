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
  document.removeEventListener('keydown', onEscapeKey);
  document.removeEventListener('click',onMessageClose);
}

const addEvent = () => {
  document.addEventListener('keydown', onEscapeKey);
  document.addEventListener('click', onMessageClose);
};

const showSuccessMessage = () => {
  typeMessage = successMessage;
  document.body.append(successMessage);
  addEvent();
};

const showErrorMessage = () => {
  typeMessage = errorMessage;
  document.body.append(errorMessage);
  addEvent();
};

export {showSuccessMessage, showErrorMessage};
