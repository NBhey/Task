// Сверстать страницу и подключить к ней файл со скриптом.
// На странице должны быть три текстовых параграфа, поле ввода и кнопка.
// Напишите скрипт, который будет выполнять следующие условия:

export default function createDomElement() {
  const body = document.querySelector("body");
  body.innerHTML = `
    <p></p>
    <p></p>
    <p></p>
    <input type="text">
    <button></button>
    `;
  const input = document.querySelector("input");
  const button = document.querySelector("button");
  // Кнопка скрыта, если в поле ввода нет значения.
  button.hidden = true;
  input.addEventListener("input", () => {
    input.value === "" ? (button.hidden = true) : (button.hidden = false);
  });

  // При клике на кнопку добавляется новый параграф,содержащий текст из поля ввода.
  button.addEventListener("click", () => {
    const p = document.createElement("p");
    p.textContent = input.value;
    body.insertBefore(p, input);
    input.value = "";
    console.log(
      [...document.querySelectorAll("p")].map((el) => el.textContent),
    );
    // Если параграфов становится больше 5, первый из них удаляется.
    const allP = document.querySelectorAll("p");
    if (allP.length >= 6) allP[0].remove();
  });
  console.log(
    [...document.querySelectorAll("p")].map((el) => el.textContent),
  );
}
