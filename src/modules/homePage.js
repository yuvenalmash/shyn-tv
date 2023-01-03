import { getShow } from './tvmazeAPI.js';

const createCard = async (showID) => {
  const show = await getShow(showID);
  const card = `
    <div class="card">
      <img src="${show.image.medium}" alt="${show.name}">
      <p>${show.name}</p>
      <div><i class="fa-solid fa-heart fa-lg"></i>6 likes</div>
      <button class="btn">Comments</button>
      <button class="btn">Reservations</button>
    </div>
  `;
  return card;
};

export const listShows = () => {
  const showIDs = [169, 82, 44, 35, 98, 25];
  showIDs.forEach(async (element) => {
    const card = await createCard(element);
    const parent = document.getElementById('cards');
    parent.innerHTML += card;
  });
};