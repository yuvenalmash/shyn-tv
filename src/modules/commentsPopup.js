import getShow from './tvmazeAPI.js';
import { getComments } from './involvementAPI.js';

export const listComments = async (showId) => {
  const data = await getComments(showId);
  const ul = document.getElementById('commentsList');
  data.forEach(async (el) => {
    const li = document.createElement('li');
    const listItem = `${el.creation_date} ${el.username} ${el.comment}`;
    li.appendChild(document.createTextNode(listItem));
    ul.appendChild(li);
  });
};

export const createCommentPopup = async (showId) => {
  const tvShow = await getShow(showId);
  const popup = `
  <div id="popup">
    <img class="popupImg" src="${tvShow.image.original}" alt="tvShow image">
    <i class="fa fa-times fa-2x" aria-hidden="true" id="close"></i>
    <h2>${tvShow.name}</h2>
    <p>${tvShow.genres}</p>
    <h3>Comments</h3>
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
  listComments(showId);

  const closeBtn = document.querySelector('#close');

  closeBtn.addEventListener('click', () => {
    parent.style.display = 'none';
  });
};
