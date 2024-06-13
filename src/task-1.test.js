import { multiAndSum, strLength, sum } from "./task-1.js";

describe("Test for task-1", () => {
  it("Function is a function", () => {
    expect(multiAndSum).toBeInstanceOf(Function);
    expect(strLength).toBeInstanceOf(Function);
    expect(sum).toBeInstanceOf(Function);
  });

  it("Console log return multi and sum", () => {
    const logSpy = jest.spyOn(global.console, "log");
    multiAndSum(2, 3);
    expect(logSpy).toHaveBeenCalledTimes(2);
    expect(logSpy).toHaveBeenCalledWith(6);
    expect(logSpy.mock.calls).toContainEqual([6], [5]);
    logSpy.mockRestore();
  });

  it("Console log return string length", () => {
    const logSpy = jest.spyOn(global.console, "log");
    strLength("cats", "dogs");
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith(8);
    logSpy.mockRestore();
  });

  it("Console log return the sum of the entered numbers", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "333");
    const logSpy = jest.spyOn(global.console, "log");
    sum();
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith(9);
    logSpy.mockRestore();
  });
});
