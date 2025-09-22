import { getPictures } from './data.js';
import { renderPictures } from './picture.js';
// import { links } from './gallery.js';
// import { showPhoto } from './imageViewer.js';
renderPictures(getPictures());

console.log("Данные фотографий");
console.log(getPhotos());
console.group(`Переменные`);
console.log(links);
console.groupEnd();
