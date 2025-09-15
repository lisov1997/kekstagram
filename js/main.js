import { getPhotos } from './data.js';

const generatedPhotos = getPhotos();
console.log(generatedPhotos);

// На основе временных данных для разработки и шаблона #picture создайте DOM-элементы, соответствующие фотографиям, и заполните их данными:

// {id: 1, url: 'photos/1}.jpg,', description: 'Так хочется обратно на этот пляж... 🏖️ #отпускмечты', likes: 92, comments: Array(8)}

// Адрес изображения url подставьте как атрибут src изображения.

// Количество лайков likes выведите в блок .picture__likes.

// Количество комментариев comments выведите в блок .picture__comments.

// Отрисуйте сгенерированные DOM-элементы в блок .pictures. Для вставки элементов используйте DocumentFragment.

// Подключите модуль в проект.
const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainerFragment = document.createDocumentFragment();

generatedPhotos.forEach((url,likes,comments) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  picturesContainerFragment.appendChild(pictureElement);
  console.group("Переменные");
  console.log(pictureElement);
  console.groupEnd();
});

picturesContainer.appendChild(picturesContainerFragment);


