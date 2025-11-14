const previewImg = document.querySelector('.img-upload__preview img');
const effectsList = document.querySelector('.effects__list');
const effectLevelSlider = document.querySelector('.effect-level__slider');
const effectValueInput = document.querySelector('.effect-level__value');

const EFFECTS = {
  none: {
    min: 0,
    max: 1,
    start: 1,
    step: 0.1,
    style: 'none',
    unit: '',
    name: 'none',
  },
  chrome: {
    min: 0,
    max: 1,
    start: 1,
    step: 0.1,
    style: 'grayscale',
    unit: '',
    name: 'chrome',
  },
  sepia: {
    min: 0,
    max: 1,
    start: 1,
    step: 0.1,
    style: 'sepia',
    unit: '',
    name: 'sepia',
  },
  marvin: {
    min: 0,
    max: 100,
    start: 100,
    step: 1,
    style: 'invert',
    unit: '%',
    name: 'marvin',
  },
  phobos: {
    min: 0,
    max: 3,
    start: 3,
    step: 0.1,
    style: 'blur',
    unit: 'px',
    name: 'phobos',
  },
  heat: {
    min: 1,
    max: 3,
    start: 3,
    step: 0.1,
    style: 'brightness',
    unit: '',
    name: 'heat',
  },
};

const DEFAULT_EFFECT = EFFECTS.none;
let CURRENT_EFFECT = DEFAULT_EFFECT;

const isDefaultEffect = () => CURRENT_EFFECT === DEFAULT_EFFECT;

const updateSLider = () => {
  effectLevelSlider.classList.remove('visually-hidden');
  effectLevelSlider.noUiSlider.updateOptions({
    range: {
      min: CURRENT_EFFECT.min,
      max: CURRENT_EFFECT.max,
    },
    start: CURRENT_EFFECT.max,
    step: CURRENT_EFFECT.step,
  });

  if(isDefaultEffect()) {
    effectLevelSlider.classList.add('visually-hidden');
  }
};


const onEffectRadioChange = (evt) => {
  if (evt.target.type === 'radio') {
    const selectedEffectKey = evt.target.value;
    const SELECTED_EFFECT = EFFECTS[selectedEffectKey];
    CURRENT_EFFECT = SELECTED_EFFECT;
  }
  updateSLider();
};

const onSliderUpdate = () => {
  if(isDefaultEffect()) {
    previewImg.style.filter = 'none';
    previewImg.className = '';
    return;
  }

  previewImg.classList.add(`effects__preview--${CURRENT_EFFECT.name}`);
  effectValueInput.value = '';

  const sliderValue = effectLevelSlider.noUiSlider.get();
  previewImg.style.filter = `${CURRENT_EFFECT.style}(${sliderValue}${CURRENT_EFFECT.unit})`;
  effectValueInput.value = sliderValue;
};

const resetFilter = () => {
  CURRENT_EFFECT = DEFAULT_EFFECT;
  updateSLider(DEFAULT_EFFECT);
};

noUiSlider.create(effectLevelSlider, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
});

effectsList.addEventListener('change', onEffectRadioChange);
effectLevelSlider.noUiSlider.on('update', onSliderUpdate);

export { resetFilter };
