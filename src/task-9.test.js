import { rectangular, lengthAndSquare, quadraticEquation } from "./task-9.js";

describe("Test for task-9", () => {
  it("Function is a function", () => {
    expect(rectangular).toBeInstanceOf(Function);
    expect(lengthAndSquare).toBeInstanceOf(Function);
    expect(quadraticEquation).toBeInstanceOf(Function);
  });

  it("Return  if a triangle is rectangular", () => {
    expect(rectangular(3, 4, 5)).toBe("Прямоугольный");
    expect(rectangular(1, 4, 5)).toBe("Не прямоугольный");
  });

  it("Console return length circle and square circle", () => {
    const logSpy = jest.spyOn(global.console, "log");
    jest.spyOn(window, "prompt").mockImplementation(() => 5);
    lengthAndSquare();
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith(
      "Площадь круга с радиусом 5 равна: 79. Длина окружности равна: 31",
    );
  });

  it("Return the roots of a quadratic equation with coefficients a, b and c.", () => {
    expect(quadraticEquation(5, 15, 10)).toBe("корень x1:-1, корень х2:-2");
    expect(quadraticEquation(1, 5, 12)).toBe("Нет корней");
  });
});
