export const createCommentPopup = () => {
  const popup = `
    <div>
      <p>Hello world!</p>
    </div>
  `
  const parent = document.getElementById('commentPopup');
  parent.innerHTML = popup;

  console.log("Commentpopup");
};
