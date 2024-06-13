// В переменных a и b хранятся числа. Написать программу, которая выводит в консоль произведениеи сумму этих чисел.

export function multiAndSum(a, b) {
  console.log(+a * +b);
  console.log(Number(a) * Number(b));
}

// В двух переменных хранятся строки символов. Написать программу, которая выведет в консоль суммарное количество символов в обоих строках.

export function strLength(str1, str2) {
  console.log((str1 + str2).length);
}

// Написать программу, которая запрашивает у пользователя ввод трёхзначного числа, а потом выводит в консоль сумму цифр введённого числа.
export function sum() {
  const input = +prompt("Введите трехзначное число");
  const num3 = input % 10;
  const num2 = ((input % 100) - num3) / 10;
  const num1 = (input - num2 * 10 - num3) / 100;
  console.log(num3 + num2 + num1);
}
