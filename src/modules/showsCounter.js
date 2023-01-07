const featuredShowsCounter = (elementsClass) => {
  const counter = document.getElementsByClassName(elementsClass);
  return counter.length;
};

export default featuredShowsCounter;