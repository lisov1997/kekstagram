// С помощью полученных обновлений (стили и скрипты, необходимые для noUiSlider) от Кексобота реализуйте применение эффекта для изображения. Кроме визуального применения эффекта необходимо записывать значение в скрытое поле для дальнейшей отправки на сервер.

// На изображение может накладываться только один эффект.

// При смене эффекта, выбором одного из значений среди радиокнопок .effects__radio, добавить картинке внутри .img-upload__preview CSS-класс, соответствующий эффекту. Например, если выбран эффект .effect-chrome, изображению нужно добавить класс effects__preview--chrome.

// Интенсивность эффекта регулируется перемещением ползунка в слайдере. Слайдер реализуется сторонней библиотекой для реализации слайдеров noUiSlider. Уровень эффекта записывается в поле .effect-level__value. При изменении уровня интенсивности эффекта (предоставляется API слайдера), CSS-стили картинки внутри .img-upload__preview обновляются следующим образом:
// Для эффекта «Хром» — filter: grayscale(0..1) с шагом 0.1;
// Для эффекта «Сепия» — filter: sepia(0..1) с шагом 0.1;
// Для эффекта «Марвин» — filter: invert(0..100%) с шагом 1%;
// Для эффекта «Фобос» — filter: blur(0..3px) с шагом 0.1px;
// Для эффекта «Зной» — filter: brightness(1..3) с шагом 0.1;
// Для эффекта «Оригинал» CSS-стили filter удаляются.
// При выборе эффекта «Оригинал» слайдер скрывается.
// При переключении эффектов, уровень насыщенности сбрасывается до начального значения (100%): слайдер, CSS-стиль изображения и значение поля должны обновляться.

const previewImg = document.querySelector('.img-upload__preview').querySelector('img');
const effectsList = document.querySelector('.effects__list');
const effectRadios = document.querySelectorAll('.effects__radio');
const effectValueInput = document.querySelector('.effect-level__value');
const effectLevelSlider = document.querySelector('.effect-level__slider');

let currentEffect = '';

const effectChange = (value) => {
  let className = `effects__preview--${value}`;
  previewImg.classList.toggle(className);
};

const onEffectradioChange = (evt) => {
  if (evt.target.type === 'radio') {
    previewImg.className = '';
    const selectedEffect = evt.target.value;
    currentEffect = selectedEffect;
    effectChange(selectedEffect);
    isSelectedlEffect(selectedEffect);
  }
};

effectsList.addEventListener('change', onEffectradioChange);

noUiSlider.create(effectLevelSlider, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
});

effectLevelSlider.noUiSlider.on('update', () => {
  const value = effectLevelSlider.noUiSlider.get();
  effectValueInput.value = value;
  applyEffect(currentEffect,value);
});

const isSelectedlEffect = (effect) => {
  if (effect === 'none') {
    effectLevelSlider.classList.add('visually-hidden');
  } else {
    effectLevelSlider.classList.remove('visually-hidden');
    for (let key in effectsSet) {
      if (effect === key) {
        effectLevelSlider.noUiSlider.updateOptions(effectsSet[key],true);
      }
    }
  }
};

const effectsSet = {
  none: {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    connect: 'lower',
  },
  chrome: {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    connect: 'lower',
  },
  sepia: {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    connect: 'lower',
  },
  marvin: {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
    connect: 'lower',
  },
  phobos: {
    range: {
      min: 0,
      max: 3,
    },
    start: 3,
    step: 0.1,
    connect: 'lower',
  },
  heat: {
    range: {
      min: 1,
      max: 3,
    },
    start: 3,
    step: 0.1,
    connect: 'lower',
  },
};

function applyEffect(effect, value) {
  switch(effect) {
    case 'none':
      previewImg.style.filter = 'none';
      break;
    case 'chrome':
      previewImg.style.filter = `grayscale(${value})`;
      break;
    case 'sepia':
      previewImg.style.filter = `sepia(${value})`;
      break;
    case 'marvin':
      previewImg.style.filter = `invert(${value}%)`;
      break;
    case 'phobos':
      previewImg.style.filter = `blur(${value}px)`;
      break;
    case 'heat':
      previewImg.style.filter = `brightness(${value})`;
      break;
  }
}

