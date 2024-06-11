import createDomElement from "./task-7.js";

describe("Test for task-7", () => {
  it("Function is a function", () => {
    expect(createDomElement).toBeInstanceOf(Function);
  });

  it("Function create DOM element", () => {
    createDomElement();
    expect(document.querySelector("body")).toBeTruthy();
    expect(document.querySelector("input")).toBeTruthy();
    expect(document.querySelector("button")).toBeTruthy();
  });

  it("Button is hidden", () => {
    createDomElement();
    expect(document.querySelector("button").hidden).toBeTruthy();
    document.querySelector("input").value = "hello";
    document.querySelector("input").dispatchEvent(new Event("input"));
    expect(document.querySelector("button").hidden).toBeFalsy();
  });

  it("Add paragraphe after click from input.value and remove first p when p > 5", () => {
    createDomElement();

    const allP = document.querySelectorAll("p");
    expect(allP.length).toBe(3);
    expect(
      [...allP].map((el) => el.textContent),
    ).toEqual(["", "", ""]);

    document.querySelector("input").value = "hello";
    document.querySelector("input").dispatchEvent(new Event("input"));
    document.querySelector("button").click();
    expect(
      [...document.querySelectorAll("p")].map((el) => el.textContent),
    ).toEqual(["", "", "", "hello"]);

    document.querySelector("input").value = "dear friend";
    document.querySelector("input").dispatchEvent(new Event("input"));
    document.querySelector("button").click();
    expect(
      [...document.querySelectorAll("p")].map((el) => el.textContent),
    ).toEqual(["", "", "", "hello", "dear friend"]);

    document.querySelector("input").value = "how are you";
    document.querySelector("input").dispatchEvent(new Event("input"));
    document.querySelector("button").click();
    expect(
      [...document.querySelectorAll("p")].map((el) => el.textContent),
    ).toEqual(["", "", "hello", "dear friend", "how are you"]);
  });
});
