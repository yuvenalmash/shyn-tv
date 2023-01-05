import getShow from './tvmazeAPI.js';
import { getComments } from './involvementAPI.js';

export const listComments = (comments) => {
  const ul = document.getElementById('commentsList');
  comments.forEach((el) => {
    const li = document.createElement('li');
    const listItem = `${el.creation_date} ${el.username} ${el.comment}`;
    li.appendChild(document.createTextNode(listItem));
    ul.appendChild(li);
  });
};

export const commentCounter = (comments) => {
  const counter = comments.length;
  return counter;
};

export const createCommentPopup = async (showId) => {
  const tvShow = await getShow(showId);
  const comments = await getComments(showId);
  const counter = await commentCounter(comments);
  const popup = `
  <div id="popup">
    <img class="popupImg" src="${tvShow.image.original}" alt="tvShow image">
    <h2>${tvShow.name}</h2>
    <p>${tvShow.genres}</p>
    <h3>Comments (${counter})</h3>
    <ul id="commentsList"></ul>
    <h3>Add a comment<h3>
    <input id="userName" type="text" placeholder="Your name">
    <input id="comment" type="text" placeholder="Your insights">
    <button onclick="handlePostComment(${showId})">Comment</button>
  </div>`;
  const parent = document.getElementById('commentPopup');
  parent.innerHTML = popup;
  parent.style.display = 'block';
  listComments(comments);
};
