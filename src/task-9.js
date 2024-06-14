// Даны длины трёх сторон треугольника. Определить, является ли треугольник прямоугольным

export function rectangular(a, b, c) {
  const result =
    a ** 2 + b ** 2 === c ** 2 ? "Прямоугольный" : "Не прямоугольный";
  return result;
}

// Пользователь вводит число R. Написать программу, которая выведет в консоль длину окружности и площадь круга с радиусом R.

export function lengthAndSquare() {
  const input = +prompt("Введите R(радиус): ");
  const circleSquare = Math.PI * input ** 2;
  const circleLength = 2 * Math.PI * input;
  console.log(
    `Площадь круга с радиусом ${input} равна: ${Math.round(circleSquare)}. Длина окружности равна: ${Math.round(circleLength)}`,
  );
}

// Пользователь вводит числа a, b и c. Написать программу, выводящую корни квадратного уравнения с коэффициентами a, b и c.

export function quadraticEquation(a, b, c) {
  const discr = b ** 2 - 4 * a * c;
  if (discr > 0) {
    const x1 = (-b + Math.sqrt(discr)) / (2 * a);
    const x2 = (-b - Math.sqrt(discr)) / (2 * a);
    return `корень x1:${x1}, корень х2:${x2}`;
  }
  if (discr === 0) {
    const x = -b / (2 * a);
    return `x= ${x}`;
  }
  return "Нет корней";
}
