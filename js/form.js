import { isEscapeKey } from "./until.js";
import { resetScale } from "./scale.js";

const body = document.querySelector('body');
const uploadForm = body.querySelector('.img-upload__form');

const hashtagsInput = uploadForm.querySelector('.text__hashtags');
const commentInput = uploadForm.querySelector('.text__description');
const fileInput = uploadForm.querySelector('#upload-file');
const overlay = uploadForm.querySelector('.img-upload__overlay');
const cancelButton = overlay.querySelector('#upload-cancel');
const uploadFormConfing = {
  classTo: 'img-upload__element',
  errorTextParent: 'img-upload__element',
  errorTextClass: 'img-upload__error',
};

const pristine = new Pristine(uploadForm, uploadFormConfing);

const openModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onModalEscKeyDown);
};

const closeModal = () => {
  uploadForm.reset();
  pristine.reset();
  resetScale();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onModalEscKeyDown);
}

const isTextInputFocused = () =>
  document.activeElement === hashtagsInput ||
  document.activeElement === commentInput;

function onModalEscKeyDown (evt) {
  if(isEscapeKey(evt) && !isTextInputFocused()) {
    evt.preventDefault();
    closeModal();
  }
};

fileInput.addEventListener ('change' , () => {
  openModal();
});

const onCancelButtonClick = () => {
  closeModal();
};

const onFileInputChange = () => {
  openModal();
};

const isHashtag = (hashtag) => {
  const hashtagPattern = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
  return hashtagPattern.test(hashtag);
};

const validateTextHashtags = (value) => {
  const hashtags = value.trim().split(/\s+/);

  if (value === '' || value === null || value === undefined) {
    return true;
  }

  if (hashtags.length > 5) {
    return false;
  }

  const lowerCaseHashtags = hashtags.map(hashtag => hashtag.toLowerCase());
  const uniqueHashtags = new Set(lowerCaseHashtags);
  if (uniqueHashtags.size !== lowerCaseHashtags.length) {
    return false;
  }
  return hashtags.every(isHashtag);
};

pristine.addValidator(
  uploadForm.querySelector('.text__hashtags'),
  validateTextHashtags,
  'Недопустимое заполнение хэштегов'
);

const onFormSubmit = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

fileInput.addEventListener('change', onFileInputChange);
cancelButton.addEventListener ('click', onCancelButtonClick);
uploadForm.addEventListener('submit', onFormSubmit);


overlay.classList.remove('hidden');
body.classList.add('modal-open');
