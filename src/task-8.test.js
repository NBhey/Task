import { dayOfWeek, todayMinute, whoOlder } from "./task-8.js";

describe("Test for task-8", () => {
  it("Function is a function", () => {
    expect(dayOfWeek).toBeInstanceOf(Function);
    expect(todayMinute).toBeInstanceOf(Function);
    expect(whoOlder).toBeInstanceOf(Function);
  });

  it("Return day of week entered date", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "12.06.2024");
    expect(dayOfWeek()).toBe("Среда");
  });

  it("Return console number of minutes that have passed since the beginning of today", () => {
    const today = new Date();
    const minute = today.getMinutes() + today.getHours() * 60;
    const logSpy = jest.spyOn(global.console, "log");
    todayMinute();
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith(minute);
  });

  it("Return who is younger", () => {
    expect(whoOlder("11.06.2024", "12.06.2024")).toBe("Старше user1");
  });
});
