import commentReducer from "reducers/CommentReducer";
import { SAVE_COMMENT } from "actions/types";

it("handles actions of type SAVE_COMMENT", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "New Comment",
  };
  const newState = commentReducer([], action);
  expect(newState).toEqual(["New Comment"]);
});

it("handles actions of unknown type", () => {
  const action = {
    type: "sdfsgsg",
    payload: "New Comment",
  };
  const newState = commentReducer([], action);
  expect(newState).toEqual([]);
});
