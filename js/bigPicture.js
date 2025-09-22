// 1.Завести модуль bigPicture

//2.Для отображения окна нужно удалять класс hidden у элемента .big-picture. Навесить обработчик события на фотографии.

// 3.Заполнить элемента .big-picture данными о конкретной фотографии:

// Адрес изображения url подставьте как src изображения внутри блока .big-picture__img.

// Количество лайков likes подставьте как текстовое содержание элемента .likes-count.

// Количество комментариев comments подставьте как текстовое содержание элемента .comments-count.

// Список комментариев под фотографией: комментарии должны вставляться в блок .social__comments. Разметка каждого комментария должна выглядеть так:

// <li class="social__comment">
//     <img
//         class="social__picture"
//         src="{{аватар}}"
//         alt="{{имя комментатора}}"
//         width="35" height="35">
//     <p class="social__text">{{текст комментария}}</p>
// </li>

// Описание фотографии description вставьте строкой в блок .social__caption.

// 3. После открытия окна спрячьте блоки счётчика комментариев .social__comment-count и загрузки новых комментариев .comments-loader, добавив им класс hidden.

// 4. После открытия окна добавьте тегу <body> класс modal-open, чтобы контейнер с фотографиями позади не прокручивался при скролле. При закрытии окна не забудьте удалить этот класс.

//5. Напишите код для закрытия окна по нажатию клавиши Esc и клике по иконке закрытия.

//6. Подключите модуль в проект.

const bigPicture = document.querySelector('.big-picture');
const bigPictureOpen = bigPicture.classList.remove('hidden');
const bigPictureImg = bigPicture.querySelector('.big-picture__img').querySelector('img');


