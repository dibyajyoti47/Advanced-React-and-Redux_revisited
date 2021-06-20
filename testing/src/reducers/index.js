import { combineReducers } from "redux";
import commentReducer from "./CommentReducer";
import authReducer from "reducers/auth";
export default combineReducers({ comments: commentReducer, auth: authReducer });
