// В переменных a и b хранятся числа. Вывести в консоль наибольшее из них.

export function moreLess(a, b) {
  const result = a > b ? a : b;
  console.log(result);
}

// Запросить у пользователя ввод числа от 1 до 12.Вывести в консоль название месяца, соответствующее тому числу (1 — январь, 2 — февраль и т.д.).

export function withdrawalMonth() {
  const input = +prompt("Введите число от 1 до 12");
  const monthArr = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  console.log(monthArr[input - 1]);
}

//   В переменных circle и square хранятся площади круга и квадрата соответственно. Написать программу, которая определяет, поместится ли круг в квадрат.

export function check(circle, square) {
  const d = 2 * Math.sqrt(circle / Math.PI);
  const a = Math.sqrt(square);
  return d >= a ? "Не вместится" : "Вместится";
}
