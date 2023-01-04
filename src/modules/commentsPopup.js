import getShow from './tvmazeAPI.js';

const createCommentPopup = async (showId) => {
  const tvShow = await getShow(showId);
  const popup = `
  <div id="popup">
    <img class="popupImg" src="${tvShow.image.original}" alt="tvShow image">
    <p>${tvShow.name}</p>
    <p>${tvShow.genres}</p>
  </div>`;
  const parent = document.getElementById('commentPopup');
  parent.innerHTML = popup;
  parent.style.display = 'block';
};

export default createCommentPopup;
