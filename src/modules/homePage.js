import { getLikes } from './involvementAPI.js';
import getShow from './tvmazeAPI.js';

const createCard = async (showID) => {
  const show = await getShow(showID);
  const card = `
    <div class="card" id ="${show.id}">
      <img src="${show.image.medium}" alt="${show.name}">
      <p>${show.name}</p>
      <div><a href="#" onclick="handleAddLike(${showID})"><i class="fa-solid fa-heart fa-lg"></a></i> <p id="${showID}likes"></p></div>
      <button class="btn" onclick="createCommentPopup(${showID})">Comments</button>
      <button class="btn">Reservations</button>
    </div>
  `;
  return card;
};

export const listShows = async () => {
  const showIDs = [169, 82, 44, 35, 98, 25];
  const likesList = await getLikes();
  const parent = document.getElementById('cards');
  showIDs.forEach(async (showId) => {
    const card = await createCard(showId);
    parent.innerHTML += card;
    const parent2 = document.getElementById(`${showId}likes`);
    const showLikes = likesList.filter((element) => element.item_id === `${showId}`);
    if (showLikes[0]) {
      parent2.innerHTML = `${showLikes[0].likes} likes`;
    }
  });
};

export const addLikes = async (showId) => {
  const likesList = await getLikes();
  console.log(likesList);
  const showLikes = likesList.filter((element) => element.item_id === `${showId}`);
  console.log(showLikes[0].likes);
  const parent = document.getElementById(`${showId}likes`);
  parent.innerHTML = `${showLikes[0].likes} likes`;
};