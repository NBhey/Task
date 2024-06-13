import createArr from "./task-5.js";

describe("Test for task-5", () => {
  it("Function is a function", () => {
    expect(createArr).toBeInstanceOf(Function);
  });

  it("Console log return sum, new array and min/max number", () => {
    const logSpy = jest.spyOn(global.console, "log");
    createArr();
    expect(logSpy).toHaveBeenCalledTimes(3);
    expect(logSpy.mock.calls).toContainEqual(
      [55],
      [[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]],
      [10, 1],
    );
  });
});
