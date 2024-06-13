import { sumInteger, multiSeven, averageOf } from "./task-3.js";

describe("Test for task-3", () => {
  it("Function is a function", () => {
    expect(sumInteger).toBeInstanceOf(Function);
    expect(multiSeven).toBeInstanceOf(Function);
    expect(averageOf).toBeInstanceOf(Function);
  });

  it("Console log return sum of integers", () => {
    const logSpy = jest.spyOn(global.console, "log");
    sumInteger(50, 100);
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith(3825);
    logSpy.mockRestore();
  });

  it("Console log return multiplication table by 7 ", () => {
    const testArr = [
      "7 x 1 = 7",
      "7 x 2 = 14",
      "7 x 3 = 21",
      "7 x 4 = 28",
      "7 x 5 = 35",
      "7 x 6 = 42",
      "7 x 7 = 49",
      "7 x 8 = 56",
      "7 x 9 = 63",
    ];
    const logSpy = jest.spyOn(global.console, "log");
    multiSeven();
    expect(logSpy).toHaveBeenCalledTimes(9);
    for (let i = 1; i < 10; i++) {
      expect(logSpy).toHaveBeenNthCalledWith(i, testArr[i - 1]);
    }
    logSpy.mockRestore();
  });

  it("Console log return arithmetic mean of all odd numbers from 1 to N.", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "5");
    const logSpy = jest.spyOn(global.console, "log");
    averageOf();
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith(3);
  });
});
