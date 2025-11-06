const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const previewImg = document.querySelector('.img-upload__preview').querySelector('img');

const SCALE_STEP = 25;
const SCALE_MIN = 25;
const SCALE_MAX = 100;
const SCALE_DEFAULT = 100;

let currentScale = SCALE_DEFAULT;

const scaleImage = (value = currentScale) => {
  previewImg.style.transform = `scale(${value / 100})`;
  scaleControlValue.value = `${value}%`;
};

const onScaleControlBiggerCLick = () => {
  if (currentScale < SCALE_MAX) {
    currentScale += SCALE_STEP;
  }
  scaleImage(currentScale);
};

const scaleControlSmallerClick = () => {
  if (currentScale > SCALE_MIN) {
    currentScale -= SCALE_STEP;
  }
  scaleImage(currentScale);
};

const resetScale = () => {
  scaleImage();
};

scaleControlBigger.addEventListener('click', onScaleControlBiggerCLick);
scaleControlSmaller.addEventListener('click', scaleControlSmallerClick);

export { resetScale };

