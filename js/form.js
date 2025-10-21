// Написать валидацию полей

// Хэш-теги

// Использовать метод .split(). Он разбивает строки на массивы. После этого, вы можете написать цикл, который будет ходить по полученному массиву и проверять каждый из хэш-тегов на предмет соответствия ограничениям.
// хэш-тег начинается с символа # (решётка);
// строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.;
// хеш-тег не может состоять только из одной решётки;
// максимальная длина одного хэш-тега 20 символов, включая решётку;
// хэш-теги нечувствительны к регистру: #ХэшТег и #хэштег считаются одним и тем же тегом;
// хэш-теги разделяются пробелами;
// один и тот же хэш-тег не может быть использован дважды;
// нельзя указать больше пяти хэш-тегов;
// хэш-теги необязательны;
// если фокус находится в поле ввода хэш-тега, нажатие на Esc не должно приводить к закрытию формы редактирования изображения.(stopPropagation)

// Комментарий

// комментарий не обязателен;
// длина комментария не может составлять больше 140 символов;
// если фокус находится в поле ввода комментария, нажатие на Esc не должно приводить к закрытию формы редактирования изображения.
// (stopPropagation)

// Реализуйте логику проверки так, чтобы, как минимум, она срабатывала при попытке отправить форму и не давала этого сделать, если форма заполнена не по правилам. При желании, реализуйте проверки сразу при вводе значения в поле.

// 3.2. Страница реагирует на неправильно введённые значения в форму. Если данные, введённые в форму, не соответствуют ограничениям, указанным в пунктах 2.3 и 2.4, форму невозможно отправить на сервер. При попытке отправить форму с неправильными данными, отправки не происходит, а пользователю показываются ошибки для неверно заполненных полей (для проверки данных используется сторонняя библиотека pristine

import { isEscapeKey } from "./until.js";

const body = document.querySelector('body');
const uploadForm = body.querySelector('.img-upload__form');
// const uploadFormConfing = {
//     classTo: 'form-group',
//     errorClass: 'has-danger',
//     successClass: 'has-success',
//     // class of the parent element where error text element is appended
//     errorTextParent: 'form-group',
//     // type of element to create for the error text
//     errorTextTag: 'div',
//     // class of the error text element
//     errorTextClass: 'text-help'
// };
const pristine = new Pristine(uploadForm);
const inputFile = uploadForm.querySelector('#upload-file');
const imgEditor = uploadForm.querySelector('.img-upload__overlay');
const cancelButton = imgEditor.querySelector('#upload-cancel');
// const submitButton = uploadForm.querySelector('#upload-submit');
const onModalEscKeyDown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadModal();
  }
};

function openUploadModal () {
  imgEditor.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onModalEscKeyDown);
}

function closeUploadModal () {
  imgEditor.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadForm.reset();
  document.removeEventListener('keydown', onModalEscKeyDown);
}

inputFile.addEventListener ('change' , () => {
  openUploadModal();
});

cancelButton.addEventListener('click', () => {
  closeUploadModal();
});

// Использовать метод .split(). Он разбивает строки на массивы. После этого, вы можете написать цикл, который будет ходить по полученному массиву и проверять каждый из хэш-тегов на предмет соответствия ограничениям.
// хэш-тег начинается с символа # (решётка);
// строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.;
// хеш-тег не может состоять только из одной решётки;
// максимальная длина одного хэш-тега 20 символов, включая решётку;
// хэш-теги нечувствительны к регистру: #ХэшТег и #хэштег считаются одним и тем же тегом;
// хэш-теги разделяются пробелами;
// один и тот же хэш-тег не может быть использован дважды;
// нельзя указать больше пяти хэш-тегов;

const validateTextHashtags = (value) => value.length >= 2 && value.length <= 140;

pristine.addValidator(
  uploadForm.querySelector('.text__hashtags'),
  validateTextHashtags
);

const validateTextDescription = (value) => value.length >= 2 && value.length <= 140;

pristine.addValidator(
  uploadForm.querySelector('.text__description'),
  validateTextDescription
);

uploadForm.addEventListener ('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if(isValid) {
    console.log('можно отправлять');
    // uploadForm.submit();
  } else {
    console.log('Нельзя отправлять');
  }
});

console.group(`Переменные`);
console.log(inputFile);
console.log(imgEditor);
console.log(body);
console.log(cancelButton);
console.log(uploadForm);
console.groupEnd();

export { };

