import { getLikes } from './involvementAPI.js';
import { getShow } from './tvmazeAPI.js';
import featuredShowsCounter from './showsCounter.js';

export const createCard = async (showID) => {
  const show = await getShow(showID);
  const card = `
    <div class="card" id ="${show.id}">
      <img src="${show.image.medium}" alt="${show.name}">
      <section>
      <p>${show.name}</p>
      <div><a href="#" onclick="handleAddLike(${showID})"><i class="fa-solid fa-heart"></a></i> <p id="${showID}likes"></p></div>
      </section>
      <button class="btn" onclick="createCommentPopup(${showID})">Comments</button>
    </div>
  `;
  return card;
};

export const listShows = async () => {
  const showIDs = [172, 618, 66, 98, 2, 4, 13, 61, 69];
  const likesList = await getLikes();
  const parent = document.getElementById('cards');
  parent.innerHTML = '';
  showIDs.forEach(async (showId) => {
    const card = await createCard(showId);
    parent.innerHTML += card;
    const parent2 = document.getElementById(`${showId}likes`);
    const showLikes = likesList.filter((element) => element.item_id === `${showId}`);
    if (showLikes[0]) {
      parent2.innerHTML = `${showLikes[0].likes} likes`;
    }
  });
  const featuredShows = document.querySelector('.featured-counter');
  setTimeout(() => {
    let counter = featuredShowsCounter('card');
    if (counter === 0) {
      counter = showIDs.length;
    }
    featuredShows.innerHTML = `<u>Featured Shows (${counter})</u>`;
  }, 500);
};

export const addLikes = async (showId) => {
  const likesList = await getLikes();
  const showLikes = likesList.filter((element) => element.item_id === `${showId}`);
  const parent = document.getElementById(`${showId}likes`);
  parent.innerHTML = `${showLikes[0].likes} likes`;
};