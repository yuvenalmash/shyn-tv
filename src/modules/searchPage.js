import { searchShow } from './tvmazeAPI.js';
import { createCard } from './homePage.js';

export const searchedShows = async (query) => {
  const shows = await searchShow(query);
  console.log(shows);
};

export const listSearchedShows = async (query) => {
  const shows = await searchShow(query);
  const container = document.getElementById('cards');
  container.innerHTML = '';
  shows.forEach(async (element) => {
    const card = await createCard(element.show.id);
    // container.appendChild(card)
    container.innerHTML += card;
  });
};