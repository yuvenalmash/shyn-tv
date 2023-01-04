import './style.css';
import { listShows, addLikes } from './modules/homePage.js';
import { createCommentPopup, listComments } from './modules/commentsPopup.js';
import { postLike, postComment } from './modules/involvementAPI.js';

const handlePostComment = async (showId) => {
  const userName = document.getElementById('userName').value;
  const comment = document.getElementById('comment').value;
  if (userName !== '' && comment !== '') {
    await postComment(showId, userName, comment);
    listComments(showId);
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