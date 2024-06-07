// Вывести в консоль сумму всех целых чисел от 50 до 100.

export function sumInteger(a, b) {
  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  console.log(sum);
}

// Вывести в консоль таблицу умножения на 7.

export function multiSeven() {
  for (let i = 1; i < 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
  }
}

// Запросить у пользователя ввод числа N. Вывести в консоль среднее арифметическое всех нечётных чисел от 1 до N.

export function averageOf() {
  const num = +prompt("Введите число");
  let count = 0;
  let res = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 2 !== 0) {
      count++;
      res += i;
    }
  }
  console.log(res / count);
}
