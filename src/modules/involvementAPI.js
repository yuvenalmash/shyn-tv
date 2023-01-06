const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

const appId = 'qS1d1JsU58cIKClC8bN0/';
// const appId = 'm4yoGSf3f0o5jjuL4DT4/';

// Likes
export const postLike = async (showId) => {
  await fetch(`${baseURL}apps/${appId}likes`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: `${showId}`,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export const getLikes = async () => {
  const response = await fetch(`${baseURL}apps/${appId}likes`);
  const responseData = await response.json();
  return responseData;
};

// comments
export const postComment = async (showId, userName, comment) => {
  await fetch(`${baseURL}apps/${appId}comments`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: `${showId}`,
      username: `${userName}`,
      comment: `${comment}`,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export const getComments = async (showId) => {
  const response = await fetch(`${baseURL}apps/${appId}comments?item_id=${showId}`);
  const responseData = await response.json();
  return responseData;
};
