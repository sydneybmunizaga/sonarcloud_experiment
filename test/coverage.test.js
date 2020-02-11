const { firstFunction } = require("../src/myAwesomeModule");

describe("testing coverage reporter", () => {
  it("first function", () => {
    const result = firstFunction();
    expect(result).toBe(true);
  });
});
