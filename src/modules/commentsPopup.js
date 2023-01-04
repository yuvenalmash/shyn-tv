import getShow from './tvmazeAPI.js';
import { getComments } from './involvementAPI.js';

export const createCommentPopup = async (showId) => {
  const tvShow = await getShow(showId);
  const popup = `
  <div id="popup">
    <img class="popupImg" src="${tvShow.image.original}" alt="tvShow image">
    <h2>${tvShow.name}</h2>
    <p>${tvShow.genres}</p>
    <h3>Comments</h3>
    <ul id="commentslist"></ul>
    <h3>Add a comment<h3>
    <input id="userName" type="text" placeholder="Your name">
    <input id="comment" type="text" placeholder="Your insights">
    <button onclick="handlePostComment(${showId})">Comment</button>
  </div>`;
  const parent = document.getElementById('commentPopup');
  parent.innerHTML = popup;
  parent.style.display = 'block';
  listComments(showId)
};

export const listComments = async (showId) =>{
  const data = await getComments(showId)
  console.log(data)
  const ul = document.getElementById("commentsList")
  data.forEach(element => {
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(element))
    ul.appendChild(li);
  });
}

