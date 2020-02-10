const myAwesomeModule = require("../src/myAwesomeModule");

describe("testing coverage reporter", () => {
  it("first function", () => {
    const result = myAwesomeModule.firstFunction();
    expect(result).toBe(true);
  });
});
