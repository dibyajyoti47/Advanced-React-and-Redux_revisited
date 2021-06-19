import { SAVE_COMMENT } from "actions/types";
import { saveComment } from "actions";

describe("saveComment", () => {
  it("has the correct type", () => {
    const action = saveComment();
    expect(action.type).toEqual(SAVE_COMMENT);
    expect(action.payload).toEqual(undefined);
  });

  it("has the correct payload", () => {
    const action = saveComment("some payload");
    expect(action.type).toEqual(SAVE_COMMENT);
    expect(action.payload).toEqual("some payload");
  });
});
