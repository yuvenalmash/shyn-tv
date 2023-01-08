import './style.css';
import { listShows, addLikes } from './modules/homePage.js';
import { createCommentPopup, listComments } from './modules/commentsPopup.js';
import { postLike, postComment, getComments } from './modules/involvementAPI.js';
import commentCounter from './modules/commentsCounter.js';
import { searchedShows, listSearchedShows } from './modules/searchPage.js';

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
    const count = commentCounter('.commentItem');
    const counter = document.getElementById('commentCount');
    counter.innerHTML = `Comments (${count})`;
  }
};

const handleAddLike = async (showId) => {
  await postLike(showId);
  addLikes(showId);
};

listShows();
const logo = document.getElementById('logo');
const featuredPageBtn = document.getElementById('featuredPageBtn');
const schedulePageBtn = document.getElementById('schedulePageBtn');
const searchBtn = document.getElementById('searchBtn');

logo.addEventListener('click', () => {
  listShows();
});

featuredPageBtn.addEventListener('click', () => {
  listShows();
});

schedulePageBtn.addEventListener('click', () =>{
  console.log('schedule btn clicked');
})

searchBtn.addEventListener('click', () => {
  const query = document.getElementById('searchInput');
  searchedShows(query.value);
  listSearchedShows(query.value);
  query.value = '';
});

window.createCommentPopup = createCommentPopup;
window.handlePostComment = handlePostComment;
window.handleAddLike = handleAddLike;