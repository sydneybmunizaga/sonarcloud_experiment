const testController = require("../utils/testController");

it("this is the only test", () => {
  const foo = "bar";
  expect(testController()).toBe(true);
});
