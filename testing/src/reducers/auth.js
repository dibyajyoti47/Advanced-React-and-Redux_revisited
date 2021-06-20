import { CHANGE_AUTH } from "actions/types";

/* eslint-disable import/no-anonymous-default-export */
export default function (state = false, action) {
  switch (action.type) {
    case CHANGE_AUTH:
      return action.payload;
    default:
      return state;
  }
}
