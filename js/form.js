import {isEscapeKey} from './util.js';
import {setDefaultSize} from './resizeimg.js';
import {setDefaulttEffect} from './filters.js';
import {sendData} from './api.js';
import {showErrorMessage, showSuccessMessage} from './alert.js';

const uploadForm = document.querySelector('.img-upload__form');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const closeButton = document.querySelector('#upload-cancel');
const submitButton = document.querySelector('.img-upload__submit');

const showUploadForm = () => {
  imgUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onEscapeKey);
  setDefaultSize();
  setDefaulttEffect();
};

const hideUploadForm = () => {
  uploadForm.reset();
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscapeKey);
};

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__message--loading'
});

uploadForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});

function onEscapeKey(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideUploadForm();
  }
}

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Отправляю..';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const setUploadFormSubmit = (onSuccess) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();

    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          onSuccess();
          unblockSubmitButton();
          showSuccessMessage();
        },
        () => {
          unblockSubmitButton();
          showErrorMessage();
        },
        new FormData(evt.target),
      );
    }
  });
};

uploadFile.addEventListener('change', showUploadForm);

closeButton.addEventListener('click', hideUploadForm);

setUploadFormSubmit(hideUploadForm);