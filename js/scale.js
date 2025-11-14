const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleValueInput = document.querySelector('.scale__control--value');
const previewImg = document.querySelector('.img-upload__preview').querySelector('img');

const SCALE = {
  STEP: 25,
  MIN: 25,
  MAX: 100,
  DEFAULT:100,
};

let currentScale = SCALE.DEFAULT;

const scaleImage = (value = currentScale) => {
  previewImg.style.transform = `scale(${value / 100})`;
  scaleValueInput.value = `${value}%`;
};

const onScaleControlBiggerCLick = () => {
  if (currentScale < SCALE.MAX) {
    currentScale += SCALE.STEP;
  }
  scaleImage(currentScale);
};

const scaleControlSmallerClick = () => {
  if (currentScale > SCALE.MIN) {
    currentScale -= SCALE.STEP;
  }
  scaleImage(currentScale);
};

const resetScale = () => {
  scaleImage(SCALE.DEFAULT);
};

scaleControlBigger.addEventListener('click', onScaleControlBiggerCLick);
scaleControlSmaller.addEventListener('click', scaleControlSmallerClick);

export { resetScale };

