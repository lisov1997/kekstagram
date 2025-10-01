const bigPicture = document.querySelector('.big-picture');
const сommentCount = bigPicture.querySelector('.social__comment-count');
const сommentList = bigPicture.querySelector('.social__comments');
const сommentsLoader = bigPicture.querySelector('.comments-loader');
const body = document.querySelector('body');
const сancelButton = bigPicture.querySelector('.big-picture__cancel');

const createComment = ({ avatar, name, message }) => {
  const comment = document.createElement('li');
  comment.innerHTML = `<img
        class="social__picture"
        src=""
        alt=""
        width="35" height="35">
      <p class="social__text">$</p>`;
  comment.classList.add('social__comment');

  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

const renderComments = (comments) => {
  сommentList.innerHTML = '';

  const fragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const commentElement = createComment(comment);
    fragment.append(commentElement);
  });

  сommentList.append(fragment);
};

const hideBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown',onEscKeyDown);
};

function onEscKeyDown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideBigPicture();
  }
}

const onCanselButtonClick = () => {
  hideBigPicture();
};

const renderBigPictureDetails = ({url, description, likes}) => {
  const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
  const bigPictureSocialCaption = bigPicture.querySelector('.social__caption');
  const bigPictureLikesCount = bigPicture.querySelector('.likes-count');
  bigPictureImg.src = url;
  bigPictureImg.alt = description;
  bigPictureSocialCaption.textContent = description;
  bigPictureLikesCount.textContent = likes;
};

const showBigPicture = (data) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  сommentsLoader.classList.add('hidden');
  сommentCount.classList.add('hidden');
  document.addEventListener('keydown', onEscKeyDown);

  renderBigPictureDetails(data);
  renderComments(data.comments);
};

сancelButton.addEventListener('click', onCanselButtonClick);

// console.group(`Переменные`);
// console.log();
// console.groupEnd();

export { showBigPicture };
