const baseURL = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/"

const appId = "qS1d1JsU58cIKClC8bN0/"

// Likes
const addLike = async (showId) =>{
  const response = await fetch(`${baseURL}/apps/${appId}/likes`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: `${showId}`,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const responseData = await response.json();
  return responseData;
}

const getLikes = async () =>{
  const response = await fetch(`${baseURL}${appId}/likes`)
  const responseData = await response.json();
  return responseData;
}


