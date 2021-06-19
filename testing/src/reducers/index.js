import { combineReducers } from "redux";
import commentReducer from "./CommentReducer";

export default combineReducers({ comments: commentReducer });
