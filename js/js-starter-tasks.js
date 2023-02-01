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


// ----------------Task-09
// // Задание:
// // Представьте, что вы разрабатываете сценарий, который будет использоваться для
// // каталога товаров в интернет-магазине.
// // Задача сценария, рассчитать какая должна быть ширина блока с описанием товара,
// // для того чтобы в одну строку поместилось
// // определенное количество товаров. Полученное значение ширины одного блока
// // отобразите в консоли.


// const screenWidth = 1980;
// const margin = 5;
// const desieredBlockCount = 5;

// const widdthAllMargin = margin * (desieredBlockCount - 1);
// const emptySpace = screenWidth - widdthAllMargin;
// const blockWidth = emptySpace / desieredBlockCount;
// console.log(`Ширина блока = ${blockWidth} px`);


// --------------Task-10
// //  Задание:
// // Выполните задание в соответствии с комментарием в коде
    
    
// const product1 = "Бумага офисная А4, 80 г/м2, 500 л";
// const product2 = "Биндеры для бумаги 51 мм";
// const product3 = "Ручка шариковая синяя"
// const productPrice1 = 280.25;
// const productPrice2 = 56;
// const productPrice3 = 12.50
// const productQuantity1 = Number(prompt(`Укажите количество продуктов '${product1}', цена ${productPrice1}`));
// const productQuantity2 = Number(prompt(`Укажите количество продуктов '${product2}', цена ${productPrice2}`));
// const productQuantity3 = Number(prompt(`Укажите количество продуктов '${product3}', цена ${productPrice3}`));
// // Выведите на экран сколько пользователю нужно заплатить за каждый продукт по
// // отдельности и всего за все продукты
// // используйте форматированный вывод

// const productTotalPrice1 = productQuantity1 * productPrice1;
// const productTotalPrice2 = productQuantity2 * productPrice2;
// const productTotalPrice3 = productQuantity3 * productPrice3;

// const productsTotalPrice = productTotalPrice1 + productTotalPrice2 + productTotalPrice3;

// console.log(`Ваш заказ ${product1}, кол-во ${productQuantity1}, сумма к оплате ${productTotalPrice1}`);
// console.log(`Ваш заказ ${product2}, кол-во ${productQuantity2}, сумма к оплате ${productTotalPrice2}`);
// console.log(`Ваш заказ ${product3}, кол-во ${productQuantity3}, сумма к оплате ${productTotalPrice3}`);
// console.log('Общая сумма', productsTotalPrice);


// ------------task-11

// // Задание:
// //     Исправьте ошибки, добавив недостающие операторы
// let product1 = "Бумага офисная А4, 80 г/м2, 500 л";
// let product2 = "Биндеры для бумаги 51 мм";
// let product3 = "Ручка шариковая синяя";

// let productPrice1 = 280.25;
// let productPrice2 = 56;
// let productPrice3 = 12.50;

// let productQuantity1 = +prompt(`Укажите количество продуктов '${product1}', цена ${productPrice1}`, 0);
// let productQuantity2 = +prompt(`Укажите количество продуктов '${product2}', цена ${productPrice2}`, 0);
// let productQuantity3 = +prompt(`Укажите количество продуктов '${product3}', цена ${productPrice3}`, 0);

// let totalPrice = 0;

// totalPrice = totalPrice + productPrice1 * productQuantity1;
// totalPrice = totalPrice + productPrice2 * productQuantity2;
// totalPrice = totalPrice + productPrice3 * productQuantity3;

// alert(`Общая сумма ${totalPrice}`);


// // --------------Task-12
//  Задание:
//     Добавьте операторы сокращенной арифметики, где это возможно
    
// let product1 = "Бумага офисная А4, 80 г/м2, 500 л";
// let product2 = "Биндеры для бумаги 51 мм";
// let product3 = "Ручка шариковая синяя";

// let productPrice1 = 280.25;
// let productPrice2 = 56;
// let productPrice3 = 12.50;

// let productQuantity1 = +prompt(`Укажите количество продуктов '${product1}', цена ${productPrice1}`, 0);
// let productQuantity2 = +prompt(`Укажите количество продуктов '${product2}', цена ${productPrice2}`, 0);
// let productQuantity3 = +prompt(`Укажите количество продуктов '${product3}', цена ${productPrice3}`, 0);

// let totalPrice = 0;

// totalPrice += productPrice1 * productQuantity1;
// totalPrice += productPrice2 * productQuantity2;
// totalPrice += productPrice3 * productQuantity3;

// alert(`Общая сумма ${totalPrice}`);


// -------------Task-13
        // // Задание
        // // Поменяйте код согласно комментариям
        // let a = 10;
        // let b = 20;

        // // укажите операторы так, чтобы на консоль вывелись сообщения, такие же, как и в 
        // // комментариях на строках 18, 19, 20
        // console.log(a < b);  // true
        // console.log(a > b);  // false
        // console.log(a < b); // true

        
// ------------------ Task-14
//  Задание:
//         Найдите и исправьте логические ошибки в сценарии.
        // let product1 = "Бумага офисная А4, 80 г/м2, 500 л";
        // let product2 = "Биндеры для бумаги 51 мм";
        // let product3 = "Ручка шариковая синяя";

        // let productPrice1 = 280.25;
        // let productPrice2 = 56;
        // let productPrice3 = 12.50;

        // let productQuantity1 = prompt(`Укажите количество продуктов '${product1}', цена ${productPrice1}`, 0);
        // let productQuantity2 = prompt(`Укажите количество продуктов '${product2}', цена ${productPrice2}`, 0);
        // let productQuantity3 = prompt(`Укажите количество продуктов '${product3}', цена ${productPrice3}`, 0);

        // // Выведите на экран сколько пользователю нужно заплатить за каждый продукт по отдельности и всего за все продукты
        // // используйте форматированный вывод
        // let totalPriceProduct1 = productPrice1 * productQuantity1;
        // let totalPriceProduct2 = productPrice2 * productQuantity1;
        // let totalPriceProduct3 = productPrice3 * productQuantity1;

        // let total = totalPriceProduct1 + totalPriceProduct2 + totalPriceProduct3;
        // console.log(`Общая сумма по продукту '${product1}' составляет ${totalPriceProduct1}`);
        // console.log(`Общая сумма по продукту '${product2}' составляет ${totalPriceProduct2}`);
        // console.log(`Общая сумма по продукту '${product3}' составляет ${totalPriceProduct3}`);
        // console.log("Всего ", total);
        
        