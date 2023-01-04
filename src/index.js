import './style.css';
import listShows from './modules/homePage.js';
import {createCommentPopup, listComments} from './modules/commentsPopup.js';
import { postComment } from './modules/involvementAPI.js';

const handlePostComment = async(showId) =>{
  const userName = document.getElementById("userName").value;
  const comment = document.getElementById("comment").value;
  await postComment(showId,userName,comment)
  listComments(showId)
}



listShows();
window.createCommentPopup = createCommentPopup;
window.handlePostComment = handlePostComment;