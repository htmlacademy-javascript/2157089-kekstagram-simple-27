import { showErrorMessage } from './alert.js';

const REMOTE_SERVER = 'https://27.javascript.pages.academy/kekstagram-simple';
const serverErrorMessage = 'Ошибка загрузки';

const getData = (onSuccess) =>
  fetch(`${REMOTE_SERVER}/data`)
    .then((response) => response.json())
    .then((userPictures) => {
      onSuccess(userPictures);
    })
    .catch(() => {
      showErrorMessage();
    });

const sendData = (onSuccess, onError, body) => {
  fetch(REMOTE_SERVER, {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onError(serverErrorMessage);
      }
    })
    .catch(() => {
      onError(serverErrorMessage);
    });
};

export { sendData, getData };
