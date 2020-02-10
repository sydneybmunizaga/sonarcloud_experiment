describe("includes only tests", () => {
  it("first non-only test", () => {
    expect(true).toBe(true);
  });

  it.only("first only test", () => {
    expect(true).toBe(true);
  });

  it("second non-only test", () => {
    expect(true).toBe(true);
  });

  it.only("second only test", () => {
    expect(true).toBe(true);
  });

  it("third non-only test", () => {
    expect(true).toBe(true);
  });
});
