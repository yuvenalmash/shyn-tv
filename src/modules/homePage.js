import { getShow } from "./tvmazeAPI.js";

const createCard = async (showID) => {
  const show = await getShow(showID);
  const card = `
    <div class="card">
      <img src="${show.image.medium}" alt="show image">
      <p>${show.name}</p>
      <button>Comments</button>
      <button>Reservations</button>
    </div>
  `;
  return card
};

export const listShows = () =>{
  const showIDs = [169, 82]
  showIDs.forEach (async(element) => {
    const card = await createCard(element)
    const parent = document.getElementById("cards")
    parent.innerHTML += card
  });
}