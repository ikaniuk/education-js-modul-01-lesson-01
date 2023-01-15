// Модуль 1. Занятие 1. Переменные, типы и операторы
// ======================================================================

// Example 1 - Математические операторы
// ----------------------------------------------------------------

// Выведи на экран общее количество яблок и винограда. Разницу яблок и винограда.

// const apples = 47;
// const grapes = 135;

// const total = apples + grapes;
// const diff = grapes - apples;

// console.log('Oбщее количество яблок и винограда:', total);

// console.log('Разницу яблок и винограда:', diff);


// Example 2 - Комбинированные операторы
// -------------------------------------------------------------------------------

// Замени выражение переопределения комбинированным оператором +=.

// let students = 100;
// // students = students + 50;
// students += 50;

// console.log(students);


// Example 3 - Приоритет операторов
// ---------------------------------------------------------------------------------

// Разбери приоритет операторов в инструкции присвоения значения переменной result.

// const result = 108 + 223 - 2 * 5;

// console.log(result);


// Example 4 - Класс Math
// ----------------------------------------------------------------------------------------

// Напиши скрипт, который выводит в консоль округленные вверх / вниз и т.д.значения
// переменной value.Используй методы Math.floor(), Math.ceil() и Math.round().Проверь
// что будет в консоли при значениях 27.3 и 27.9.

// const value = 27.5;

// console.log(Math.floor(value));

// console.log(Math.ceil(value));

// console.log(Math.round(value));


// Example 5 - Шаблонные строки
// --------------------------------------------------------------------------------------
// Составь фразу с помощью шаблонных строк A has B bots in stock,
// где A, B - переменные вставленные в строку.

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} boots in stock`;

// console.log(message); // "Cyberdyne Systems has 200 bots in stock"


// Example 6 - Методы строк и чейнинг
// -------------------------------------------------------------------------------------------

// Напиши скрипт который рассчитывает индекс массы тела человека.
// Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.
// Вес и высота хранятся в переменных weight и height, но не как числа,
// а в виде строк(специально для задачи).Нецелые числа могут быть заданы
// в виде 24.7 или 24, 7, то есть в качестве разделителя дробной части может быть запятая.

// Индекс массиы тела необходимо округлить до одной цифры после запятой;

// let weight = '88,3';
// weight = Number(weight.replace(',', '.')) ;

// console.log(weight);

// let height = '1.75';
// height = Number(height);
// height = Math.pow(height, 2);
// console.log(height);

// const bmi = weight / height;

// console.log(Number(bmi.toFixed(1))); // 28.8


// Example 7 - Операторы сравнения и приведение типов
// -------------------------------------------------------------------------------------------

// Каким будет результат выражений ?

// console.log(5 > 4);

// console.log(10 >= '7');

// console.log('2' > '12');

// console.log('2' < '12');

// console.log('4' == 4);

// console.log('6' === 6);

// console.log('false' === false);

// console.log(1 == true);

// console.log(1 === true);

// console.log('0' == false);

// console.log('0' === false);

// console.log('Papaya' < 'papaya');

// console.log('Papaya' === 'papaya');

// console.log(undefined == null);

// console.log(undefined === null);


// Example 8 - Логические операторы
// -----------------------------------------------------------------------------------------------

// Каким будет результат выражений?


// console.log(true && 3);
// // 3

// console.log(false && 3);
// // false

// console.log(true && 4 && 'kiwi');
// // kiwi

// console.log(true && 0 && 'kiwi');
// // 0

// console.log(true || 3);
// // true

// console.log(true || 3 || 4);
// // true

// console.log(true || false || 7);
// // true

// console.log(null || 2 || undefined);
// // 2

// console.log((1 && null && 2) > 0);
// // false

// console.log(null || (2 && 3) || 4);
// 3


// Example 9 - Значение по умолчанию и оператор нулевого слияния
// -----------------------------------------------------------------------------------
// Отрефактори код так, чтобы в переменную value присваивалось
// значение переменной incomingValue, если оно не равно undefined или null.
// В противном случае должно присваиваться значение defaultValue.
// Проверь работу скрипта для слепдующих значений
// переменной incomingValue: null, undefined, 0, false.
// Используй оператор ?? (nullish coalescing operator).

// const incomingValue = 5;
// const defaultValue = 10;
// // const value = incomingValue || defaultValue;
// const value = incomingValue ?? defaultValue;

// console.log(value);


// Example 10 - Опертор % и методы строк
// ---------------------------------------------------------------------------------------
// Напиши скрипт который переведёт значение totalMinutes(количество минут)
// в строку в формате часов и минут HH: MM.

// 70 покажет 01:10
// 450 покажет 07:30
// 1441 покажет 24:01
// const totalMinutes = 70;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);


// ===========================================================================
// Задачи Александра РЕПЕТЫ
// =============================================================================

//  1) Напиши скрипт который просит пользователя ввести число и степень,
//  возводит число в эту степень и выводит результат в консоль

// const base = Number(prompt('Давай число'));
// const power = Number(prompt('Давай степень'));
// // const result = Math.pow(base, power);
// const result = base ** power;

// console.log(result);


//  2) Напиши скрипт который проверяет вхождение числа
//  в отрезок обозначенный x1 и x2.

//  - До x1
//  - После x2
//  - От x1 до x2
//  - До x1 или после x2

// const x1 = 10;
// const x2 = 30;
// const number = 31;

// console.log(`Число ${number} попадает в отрезок до ${x1}?`, number < x1);
// console.log(`Число ${number} попадает в отрезок после ${x2}?`, number > x2);

// const res1 = number > x1 && number < x2;
// console.log(`Число ${number} попадает в отрезок от ${x1} и до ${x2}?`, res1);

// const res2 = number < x1 || number > x2;
// console.log(`Число ${number} попадает в отрезок до ${x1} или после ${x2}?`, res2);


// 3) Напиши скрипт который проверяет возможность открыть чат с пользователем.
//   Для этого пользователь должен быть:
//  - другом
//  - онлайн
//  - без режима не беспокоить

// const isFriend = true;
// const isOnLine = true;
// const isDnd = true;


// const canOpenChat = isFriend && isOnLine && !isDnd;
// console.log(`Можно открыть чат?`, canOpenChat);


//  4) Напиши скрипт проверки подписки пользователя при доступе к контенту
//  - Есть три типа подписки: free, pro и vip.
//  - Получить доступ могут только пользователи pro и vip

// const sub = 'pro';

// const canAccessContent = sub === 'pro' || sub === 'vip';

// console.log('Есть доступ к контенту?', canAccessContent);


//  5) Напиши скрипт обработки покупки в магазине.
 
//   - Баланс пользователя хранится в переменной balance
//   - Сумма покупки хранится в переменной payment
 
//   - Перед проверкой вывести сообщение:
//   «Общая стоимость заказа [число] кредитов. Проверяем кол-во доступных средств на счету»
 
//   - Если сумма покупки не превышает баланс:
//      - Вычесть из баланса сумму покупки
//      - Вывести сообщение «На счету осталось [число] кредитов»
//   - Если сумма покупки превышает баланс:
//      - Вывести сообщение «На счету недостаточно средств для проведения операции!»
//   - В конце вывести сообщение «Операция завершена»

// let balance = 1000;
// const payment = 0;

// console.log(`Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету`)

// if (payment <= balance) {
//     balance -= payment;
//     console.log(`На счету осталось ${balance} кредитов`);
// } else {
//     console.log('На счету недостаточно средств для проведения операции!');
// }
// console.log('Операция завершена');