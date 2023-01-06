export const commentCounter = (elementClass) => {
  const counter = document.querySelectorAll(elementClass).length
  return counter;
};