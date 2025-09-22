import { getRandomPositiveInteger, getRandomArrayElement } from './until.js';

const commentLines = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const description = [
  '🔥 Это лето просто огонь! #лето2024',
  'Так хочется обратно на этот пляж... 🏖️ #отпускмечты',
  'Когда солнце, море и хорошая компания 🌞 #идеальноелето',
  'Эти летние закаты сводят с ума! 🌅 #природа',
  'Лето, ты прекрасно! ❤️ #летнийрежим',
  'Как же я скучаю по этому месту! #путешествия',
  'Ничто не сравнится с летними вечерами у костра 🔥 #отдыхнаприроде',
  'Море, солнце, пляж - что еще нужно для счастья? 🏝️ #райскиеместа',
  'Лучшие моменты лета 2024! 📸 #воспоминания',
  'Когда смотрю эти фото, сразу чувствую летний бриз 🌊 #ностальгия',
  'Это было самое незабываемое путешествие! ✈️ #адреналин',
  'Как же красиво в этом месте! 😍 #фотолокация',
  'Летние каникулы - лучшее время года! 🎉 #каникулы',
  'Эти фото напоминают, что жизнь прекрасна! 🌴 #жизньпрекрасна',
  'Хочу, чтобы это лето не заканчивалось! #бесконечноелето'
];

const names = ['Александр', 'Мария', 'Дмитрий', 'Анна', 'Иван', 'Екатерина'];

const createMessage = () =>
  Array.from({ length: getRandomPositiveInteger(1,2)},() =>
    getRandomArrayElement(commentLines)
  ).join(' ');

const createComment = (index) => ({
  id: index,
  avatar: `img/avatar-${getRandomPositiveInteger(1,6)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(names),
});

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(description),
  likes: getRandomPositiveInteger(15,200),
  comments: Array.from(
    { length: getRandomPositiveInteger(0,12) },
    (_, commentIndex) => createComment(commentIndex + 1)
  ),
});

const getPictures = () =>
  Array.from({ length: 25}, (_, pictureIndex) =>
    createPicture(pictureIndex + 1)
  );

export { getPictures };


