// Запросите у пользователя дату в формате ДД.ММ.ГГГГ. Напишите программу, выводящую день недели по введённой дате

export function dayOfWeek() {
  const input = prompt("Введите дату в формате ДД.ММ.ГГГГ.");
  const [day, month, year] = input.split(".");
  const newDate = new Date(`${year}-${month}-${day}`).getDay();
  const dayWeek = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  return dayWeek[newDate];
}

// Написать программу, которая выводит в консоль количество минут, прошедшее с начала сегодняшнего дня.

export function todayMinute() {
  const today = new Date();
  const minute = today.getMinutes() + today.getHours() * 60;
  console.log(minute);
}

// В двух переменных хранятся даты рождения двух пользователей в форматен ДД.ММ.ГГГГ. Написать программу, которая определяет более молодого пользователя

export function whoOlder(user1, user2) {
  function checkBirthday(somethingUser) {
    const [day, month, year] = somethingUser.split(".");
    const date = new Date(`${year}-${month}-${day}`);
    const timeStamp = date.getTime();
    return timeStamp;
  }
  return checkBirthday(user1) > checkBirthday(user2)
    ? "Старше user2"
    : "Старше user1";
}
