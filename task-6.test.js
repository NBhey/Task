import { diff, isWord, pow } from "./task-6.js";

describe("Test for task-6", () => {
  it("Function is a function", () => {
    expect(diff).toBeInstanceOf(Function);
    expect(isWord).toBeInstanceOf(Function);
    expect(pow).toBeInstanceOf(Function);
  });

  it("Func diff return difference in numbers", () => {
    const test = diff(10, 4);
    const test2 = diff(4, 15);
    expect(test).toBe(6);
    expect(test2).toBe(11);
  });

  it("If str length <= 1 return true else false", () => {
    const test = isWord("Кошка");
    const test2 = isWord("Кошка гуляет по саду");
    const test3 = isWord("");
    const test4 = isWord("           ");
    expect(test).toBe(true);
    expect(test2).toBe(false);
    expect(test3).toBe(true);
    expect(test4).toBe(true);
  });

  it("Func pow return exponentiation of the entered number", () => {
    const test = pow(3, 3);
    const test2 = pow(2, 2);
    expect(test).toBe(27);
    expect(test2).toBe(4);
  });
});
