// Сверстать страницу и подключить к ней файл со скриптом.
// На странице должны быть три текстовых параграфа, поле ввода и кнопка.
// Напишите скрипт, который будет выполнять следующие условия:

export default function createDomElement(el) {
  const body = document.querySelector("body");
  body.append(el);
  el.innerHTML = `
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
    el.insertBefore(p, input);
    input.value = "";
    // Если параграфов становится больше 5, первый из них удаляется.
    const allP = document.querySelectorAll("p");
    if (allP.length >= 6) allP[0].remove();
  });
}
