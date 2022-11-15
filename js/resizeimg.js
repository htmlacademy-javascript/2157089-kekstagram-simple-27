const upScaleButton = document.querySelector('.scale__control--smaller');
const downScaleButton = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const imageUploadPreview = document.querySelector('.img-upload__preview img');

const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;
const TOTAL_SCALE = 100;

const scaleImage = (value = DEFAULT_SCALE) => {
  imageUploadPreview.style.transform = `scale(${value / TOTAL_SCALE})`;
  scaleControlValue.value = `${value}%`;
};

const onUpScaleButtonClick = () => {
  const currentValue = parseInt(scaleControlValue.value, 10);
  let newValue = currentValue - SCALE_STEP;
  if (newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }
  scaleImage(newValue);
};

const onDownScaleButtonClick = () => {
  const currentValue = parseInt(scaleControlValue.value, 10);
  let newValue = currentValue + SCALE_STEP;
  if (newValue > MAX_SCALE) {
    newValue = MAX_SCALE;
  }
  scaleImage(newValue);
};

const setDefaultSize = () => {
  scaleImage();
};

upScaleButton.addEventListener('click', onUpScaleButtonClick);
downScaleButton.addEventListener('click', onDownScaleButtonClick);

export {setDefaultSize};
