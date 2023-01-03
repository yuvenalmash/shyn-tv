const baseURL = 'https://api.tvmaze.com/shows/'

export const getShow = async (showID)=>{
  const response = await fetch(`${baseURL}${showID}`);
  const responseData = await response.json();
  return responseData
}
