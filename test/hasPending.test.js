describe("includes pending tests", () => {
  it("first non-pending test", () => {
    expect(true).toBe(true);
  });

  it.skip("first pending test", () => {
    expect(true).toBe(true);
  });

  it("second non-pending test", () => {
    expect(true).toBe(true);
  });

  it.skip("second pending test", () => {
    expect(true).toBe(true);
  });

  it("third non-pending test", () => {
    expect(true).toBe(true);
  });
});
