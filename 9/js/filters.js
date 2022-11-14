const EFFECTS = [
  {
    name: 'none',
    min: 0,
    max: 100,
    step: 1,
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
];

const imageUploadPreview = document.querySelector('.img-upload__preview img');
const uploadForm = document.querySelector('.img-upload__form');
const sliderElement = document.querySelector('.effect-level__slider');
const effectLevel = document.querySelector('.effect-level__value');

const defaultEffect = EFFECTS[0];
let chosenEffect = defaultEffect;

const isDefault = () => chosenEffect === defaultEffect;

const updateSlider = () => {
  sliderElement.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions ({
    range:{
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    step: chosenEffect.step,
    start: chosenEffect.max,
  });

  if (isDefault()) {
    sliderElement.classList.add('hidden');
  }
};

const onFormChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);

  updateSlider();
};

const onSliderUpdate = () => {
  imageUploadPreview.style.filter = EFFECTS[0].name;
  imageUploadPreview.className = '';
  effectLevel.value = '';
  if (isDefault()) {
    return;
  }

  const sliderValue = sliderElement.noUiSlider.get();
  imageUploadPreview.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  imageUploadPreview.classList.add(`effects__preview--${chosenEffect.name}`);
  effectLevel.value = sliderValue;
};

const setDefaulttEffect = () => {
  chosenEffect = defaultEffect;
  updateSlider();
};

noUiSlider.create(sliderElement, {
  range: {
    'min': defaultEffect.min,
    'max': defaultEffect.max,
  },
  step: defaultEffect.step,
  start: defaultEffect.max,
  connect: 'lower',
});
updateSlider();


uploadForm.addEventListener('change', onFormChange);
sliderElement.noUiSlider.on('update', onSliderUpdate);

export {setDefaulttEffect};
