import getShow from './tvmazeAPI.js';
import { getComments } from './involvementAPI.js';

export const listComments = (comments) => {
  const ul = document.getElementById('commentsList');
  if (comments.error===undefined) {
    comments.forEach((el) => {
      const li = document.createElement('li');
      const listItem = `${el.creation_date} ${el.username} ${el.comment}`;
      li.appendChild(document.createTextNode(listItem));
      ul.appendChild(li);
    });
  }
};

export const commentCounter = (comments) => {
  const counter = comments.length;
  return counter;
};

export const createCommentPopup = async (showId) => {
  const tvShow = await getShow(showId);
  const comments = await getComments(showId);
  let counter = await commentCounter(comments);
  if (!counter) { counter = 0; }
  const popup = `
  <div id="popup">
    <img class="popupImg" src="${tvShow.image.original}" alt="tvShow image">
    <i class="fa fa-times fa-2x" aria-hidden="true" id="close"></i>
    <h2>${tvShow.name}</h2>
    <p>Genres: ${tvShow.genres}</p>
    <p>Status: ${tvShow.status}</p>
    <p>Network: ${tvShow.network.name}</p>
    <p>Summary: ${tvShow.summary}</p>
    <h3>Comments (${counter})</h3>
    <ul id="commentsList"></ul>
    <h3>Add a comment<h3>
    <form action="">
      <input id="userName" type="text" placeholder="Your name">
      <input id="comment" type="text" placeholder="Your insights">
      <button onclick="handlePostComment(${showId})">Comment</button>
    </form>
  </div>`;
  const parent = document.getElementById('commentPopup');
  parent.innerHTML = popup;
  parent.style.display = 'flex';
  listComments(comments);

  const closeBtn = document.querySelector('#close');

  closeBtn.addEventListener('click', () => {
    parent.style.display = 'none';
  });
};
