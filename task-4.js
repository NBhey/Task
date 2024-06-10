export default function createObj() {
  // Создайте объект user, содержащий поле name со значением ‘John’.

  const user = {
    name: "John",
  };
  // 1.Запросить у пользователя ввод числа. Записать введенное значение в поле age объекта user

  const inputAge = +prompt("Введите число: ");
  user.age = inputAge;
  console.log(user);
  // 2. Создать копию объекта user с именем admin. Добавить новому объекту поле role со значением ‘admin’.

  const admin = { ...user};
  admin.role = "admin";
  console.log(admin);

  // Записать все значения полей объекта admin в отдельные переменные. Имена переменных должны совпадать с названиями полей.
  const { name, age, role } = admin;
  console.log(name, age, role);
}
