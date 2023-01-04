const baseURL = 'https://api.tvmaze.com/shows/';

const getShow = async (showID) => {
  const response = await fetch(`${baseURL}${showID}`);
  const responseData = await response.json();
  return responseData;
};

export default getShow;