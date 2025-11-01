const bigPicture = document.querySelector('.big-picture');
const сommentCount = bigPicture.querySelector('.social__comment-count');
const сommentList = bigPicture.querySelector('.social__comments');
const сommentsLoader = bigPicture.querySelector('.comments-loader');
const body = document.querySelector('body');
const сancelButton = bigPicture.querySelector('.big-picture__cancel');

const COMMENTS_PER_PORTION = 5;
let commentsShown = 0;
let comments = [];

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

const renderComments = () => {
  commentsShown += COMMENTS_PER_PORTION;

  if (commentsShown >= comments.length) {
    сommentsLoader.classList.add('hidden');
    commentsShown = comments.length;
  } else {
    сommentsLoader.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < commentsShown; i++) {
    const commentElement = createComment(comments[i]);
    fragment.append(commentElement);
  }

  сommentList.innerHTML = '';
  сommentList.append(fragment);
  сommentCount.innerHTML = `${commentsShown} из <span class="comments-count">${comments.length}</span> комментариев`;
};

const hideBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown',onEscKeyDown);
  commentsShown = 0;
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

const onCommentLoaderClick = () => renderComments();

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
  document.addEventListener('keydown', onEscKeyDown);

  renderBigPictureDetails(data);
  comments = data.comments;
  if(comments.length > 0) {
    renderComments();
  }
};

сancelButton.addEventListener('click', onCanselButtonClick);
сommentsLoader.addEventListener('click', onCommentLoaderClick);

export { showBigPicture };
