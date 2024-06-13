import createObj from "./task-4.js";

describe("Test for task-4", () => {
  it("Function is funtion", () => {
    expect(createObj).toBeInstanceOf(Function);
  });

  it("Input num for obj", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "15");
    const logSpy = jest.spyOn(global.console, "log");
    createObj();
    expect(logSpy).toHaveBeenCalledTimes(3);
    expect(logSpy.mock.calls).toContainEqual(
      [{ name: "John", age: 15 }],
      [{ name: "John", age: 15, role: "admin" }],
      ["John", 15, "admin"],
    );
    logSpy.mockRestore();
  });
});
