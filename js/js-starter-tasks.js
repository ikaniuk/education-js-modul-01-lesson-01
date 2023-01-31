// -------------Task-01-
//  Задание:
//         1) Объявите две переменные: login и name.
//         3) Переменной name в качестве значения присвойте свое имя
//         3) Скопируйте значение из переменной name в login
//         4) Выведите в консоль браузера значение переменной login

// const myName = 'Igor';
// const login = myName;
// console.log(login);


// -----------------Task-02
// Задание:
//         Выберите подходящие имена для переменных и создайте их в коде.
//         1) Переменная для хранения даты создания файла.
//         2) Переменная для хранения имени файла.
//         3) Переменная для хранения количества ошибок.

// const fileDate = '11.12.2022';
// const fileName = 'File';
// const mistakesQuantity = 5;

// console.log(fileDate);
// console.log(fileName);
// console.log(mistakesQuantity);


// -----------------------Task-03
// // Вычислите значение полощади окружности на основании значений
// const r = 15;
// const Pi = 3.1415;
// // Площадь круга равна произведение квадрата радиуса на чмсло ПМ(3.1415)

// const result = Math.pow(r, 2) * Pi;
// console.log(Number(result.toFixed(2)));


// ----------------Task-04
//  Задание:
//         Выполните задание согласно комментарию в коде.
//         let productPrice1 = 101.5; // цена 1го продукта
//         let productPrice2 = 50.25; // цена 2го продукта
//         let productPrice3 = 10.11; // цена 3го продукта

//         let productQuantity1 = 5;  // количество единиц 1го продукта на складе
//         let productQuantity2 = 9;  // количество единиц 2го продукта на складе
//         let productQuantity3 = 15; // количество единиц 3го продукта на складе

//         // Выведите на экран:
//         // 1) Среднюю цену на продукт
//         // 2) Общую стоимость всех продуктов, которые есть на складе

// const averagePrice = (productPrice1 * productQuantity1 + productPrice2 * productQuantity2 + productPrice3 * productQuantity3) / (productQuantity1 + productQuantity2 + productQuantity3);
// const totalPrice = productPrice1 * productQuantity1 + productPrice2 * productQuantity2 + productPrice3 * productQuantity3;

// console.log('Среднюю цену на продукт =', Number(averagePrice.toFixed(2)));
// console.log('Общую стоимость всех продуктов, которые есть на складе =', totalPrice);


// --------------Task-05
// Определите, какую из переменных нужно заменить на константу.
// console.log("Вычисление объема цилиндра.");
//         //  V=π * r в квадрате * h
//         let V;
//         const Pi = 3.1415926535;
//         let r = 10;
//         let h = 20;

//         V = Pi * r * r * h;
//         console.log(V);


// ---------------Task-06
// Задание:
//         Выполните задание в соответствии с комментариями.

//         const name = "Иван";
//         const age = 25;
//         const company = "ITVDN";
//         const position = "Frontend Developer";

//         // инициализируйте переменную message
//         // значение должно быть создано с помощью шаблонной строки и с помощью конкатенации.
//         // строковое значение должно быть создано на основе значений переменных name, age, company, position
//         // Значение должно быть составлено по шаблону:
//         // Привет, меня зовут Иван. Мне 25 лет. Я работаю на должности Frontend Developer в компании ITVDN.

// const message = `Привет, меня зовут ${name}. Мне ${age} лет. Я работаю на должности ${position} в компании ${company}`;
// const message = 'Првет меня зовут ' + name + '. Мне ' + age + ' лет. Я работаю на должности ' + position + ' в компании ' + company + '.';
// console.log(message);


// ------------------Task-07
// Задание:
//         Внесите изменения в сценарий.Сделайте, чтобы значение для радиуса и
//         высоты вводил пользователь.
//         При выводе значений используйте форматированный вывод,
//         например, "объем цилиндра с высотой X и радиусом Y = Z"
        
// alert("Вычисление объема цилиндра.");
//  //  V=π * r в квадрате * h
// const r = Number(prompt('Введите радиус цилиндра')); // радиус
// const h = Number(prompt('Введите высоту цилиндра')); // высота
// const Pi = 3.1415926535; // правильно использовать константу для подобных значений
// const V = Pi * Math.pow(r, 2) * h;

// alert(`объем цилиндра с высотой ${h} и радиусом ${r} = ${V}`);


// -----------------Task-08
// // Задание:
// // 1) запросите у пользователя сколько он хочет купить единиц товара
// // 2) выведите на экран какую сумму должен внести пользователь с учетом количества 
// // покупаемых единиц
// // 3) выведите на экран сколько единиц товара останется на складе после покупки

// const productPrice = 101.5; // цена товара
// let productQuantity = 50;  // количество единиц товара на складе
// const userProductQuantity = Number(prompt('Сколько единиц товара хотите купить?'));
// const totalPrice = userProductQuantity * productPrice;
// productQuantity -= userProductQuantity;
// alert(`Вы должны внести сумму ${totalPrice} за ${userProductQuantity} едениц товара`);
// alert(`После покупки на складе осталось ${productQuantity} едениц товара.`);

