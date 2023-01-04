import { getShow } from "./tvmazeAPI.js";
// import { createCommentPopup } from "./commentsPopup.js";

const createCard = async (showID) => {
  const show = await getShow(showID);
  const card = `
    <div class="card" id ="${show.id}">
      <img src="${show.image.medium}" alt="show image">
      <p>${show.name}</p>
      <button onclick="createCommentPopup(${showID})">Comments</button>
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