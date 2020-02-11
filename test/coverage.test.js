import { firstFunction } from "../src/myAwesomeModule";

describe("testing coverage reporter", () => {
  it("first function", () => {
    const result = firstFunction();
    expect(result).toBe(true);
  });
});
