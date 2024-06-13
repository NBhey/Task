import regExp from "./task-10.js";

describe("Test for task-10", () => {
  it("Function is function", () => {
    expect(regExp).toBeInstanceOf(Function);
  });

  it("Return data", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "20.12.1883");
    window.alert = jest.fn();
    regExp();
    expect(window.alert).toHaveBeenCalledTimes(1);
    expect(window.alert).toHaveBeenCalledWith("Введена дата");
  });

  it("Return email", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "john@gmail.com");
    window.alert = jest.fn();
    regExp();
    expect(window.alert).toHaveBeenCalledTimes(1);
    expect(window.alert).toHaveBeenCalledWith("Введен e-mail");
  });

  it("Return phone", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "+7 999 999-99-99");
    window.alert = jest.fn();
    regExp();
    expect(window.alert).toHaveBeenCalledTimes(1);
    expect(window.alert).toHaveBeenCalledWith("Введен телефон");
  });

  it("Return error", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "fsdvcx");
    window.alert = jest.fn();
    regExp();
    expect(window.alert).toHaveBeenCalledTimes(1);
    expect(window.alert).toHaveBeenCalledWith(
      "Проверьте введные данные согласно инструкции",
    );
  });
});
