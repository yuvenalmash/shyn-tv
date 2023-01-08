const baseURL = 'https://api.tvmaze.com';

export const getShow = async (showID) => {
  const response = await fetch(`${baseURL}/shows/${showID}`);
  const responseData = await response.json();
  return responseData;
};

export const searchShow = async (query) => {
  const response = await fetch(`${baseURL}/search/shows?q=${query}`);
  const responseData = await response.json();
  return responseData;
};
