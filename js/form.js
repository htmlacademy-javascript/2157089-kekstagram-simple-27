import {isEscapeKey} from './util.js';

const uploadForm = document.querySelector('.img-upload__form');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const closeButton = document.querySelector('#upload-cancel');

const showUploadForm = () => {
  imgUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', pushEscapeKey);
};

const hideUploadForm = () => {
  uploadForm.reset();
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', pushEscapeKey);
};

const pristine = new Pristine(uploadForm,
  {
    classTo: 'img-upload__text',
    errorTextParent: 'img-upload__text',
  },
  true
);

uploadForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});

function pushEscapeKey(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideUploadForm();
  }
}

uploadFile.addEventListener('change', (showUploadForm));

closeButton.addEventListener('click', (hideUploadForm));
