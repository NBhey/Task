import { moreLess, withdrawalMonth, check } from "./task-2.js";

describe("Test for task-1", () => {
  it("Function is a function", () => {
    expect(moreLess).toBeInstanceOf(Function);
    expect(withdrawalMonth).toBeInstanceOf(Function);
    expect(check).toBeInstanceOf(Function);
  });

  it("Console log return largest num", () => {
    const logSpy = jest.spyOn(global.console, "log");
    moreLess(5, 44);
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith(44);
    logSpy.mockRestore();
  });

  it("Console log return input month", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "3");
    const logSpy = jest.spyOn(global.console, "log");
    withdrawalMonth();
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith("Март");
    logSpy.mockRestore();
    jest.spyOn(window, "prompt").mockRestore();
  });

  it("Function return will the circle fit into a square or not", () => {
    expect(check(15, 20)).toBe("Вместится");
    expect(check(15, 15)).toBe("Не вместится");
  });
});
