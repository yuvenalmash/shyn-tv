import "./style.css";
import { listShows } from "./modules/homePage";
import { createCommentPopup } from "./modules/commentsPopup.js";

listShows()
window.createCommentPopup = createCommentPopup