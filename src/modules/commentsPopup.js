import { getShow } from './tvmazeAPI.js';
import { getComments } from './involvementAPI.js';
import commentCounter from './commentsCounter.js';

export const listComments = (comments) => {
  const ul = document.getElementById('commentsList');
  if (comments.error === undefined) {
    comments.forEach((el) => {
      const li = document.createElement('li');
      li.classList.add('commentItem');
      const listItem = `${el.creation_date} ${el.username} ${el.comment}`;
      li.appendChild(document.createTextNode(listItem));
      ul.appendChild(li);
    });
  }
};

export const createCommentPopup = async (showId) => {
  const tvShow = await getShow(showId);
  const comments = await getComments(showId);
  const popup = `
  <div id="popup">
    <i class="fa fa-times fa-2x" aria-hidden="true" id="close"></i>
    <section id="popupTop">
      <section id="popupBottom">
      <img class="popupImg" src="${tvShow.image.original}" alt="tvShow image">
        <h2 id="commentCount"></h2>
        <ul id="commentsList"></ul>
        <h3>Add a comment<h3>
        <div id="addCommentForm">
          <input id="userName" type="text" placeholder="Your name">
          <input id="comment" type="text" placeholder="Your insights">
          <button onclick="handlePostComment(${showId})">Comment</button>
        </div>
      </section>
      <div id="popupDetails">
        <h1>${tvShow.name}</h1>
        <p>Genres: ${tvShow.genres}</p>
        <p>Status: ${tvShow.status}</p>
        <p>Network: ${tvShow.network.name}</p>
        <p>Summary: ${tvShow.summary}</p>
      </div>
    </section>
  
  </div>`;
  const parent = document.getElementById('commentPopup');
  parent.innerHTML = popup;
  parent.style.display = 'flex';
  listComments(comments);
  const count = commentCounter('.commentItem');
  const counter = document.getElementById('commentCount');
  counter.innerHTML = `Comments (${count})`;

  const closeBtn = document.querySelector('#close');

  closeBtn.addEventListener('click', () => {
    parent.style.display = 'none';
  });
};
