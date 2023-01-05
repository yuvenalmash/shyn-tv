import './style.css';
import { listShows, addLikes } from './modules/homePage.js';
import { createCommentPopup, listComments } from './modules/commentsPopup.js';
import { postLike, postComment, getComments } from './modules/involvementAPI.js';

const handlePostComment = async (showId) => {
  const userName = document.getElementById('userName');
  const comment = document.getElementById('comment');
  if (userName.value !== '' && comment.value !== '') {
    await postComment(showId, userName.value, comment.value);
    userName.value = '';
    comment.value = '';

    const comments = await getComments(showId);
    const newComment = comments[comments.length - 1];
    listComments([newComment]);
  }
};

const handleAddLike = async (showId) => {
  await postLike(showId);
  addLikes(showId);
};

listShows();
window.createCommentPopup = createCommentPopup;
window.handlePostComment = handlePostComment;
window.handleAddLike = handleAddLike;