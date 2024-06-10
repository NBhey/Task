export default function createArr() {
  // Создайте массив целых чисел из 10 элементов.
  const arr = [];
  for (let i = 1; i <= 10; i++) {
    arr.push(i);
  }
  // Выведите в консоль сумму всех элементов массива.
  const sum = arr.reduce((currentSum, currentNum) => currentSum + currentNum, 0);
  console.log(sum);

  // Создайте новый массив на основе исходного, в котором каждый элемент будет вдвое больше элемента исходного массива с таким же индексом.

  const newArr = arr.map((el) => el * 2);
  console.log(newArr);

  // Найдите и выведите в консоль наибольший и наименьший элементы исходного массива.
  console.log(Math.max(...arr), Math.min(...arr));
}
