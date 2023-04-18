//  -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.

// const fruts = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];

// fruts[0].name = 'Ivan';
// fruts[1].name = 'Oleg';
// fruts[2].name = 'Viktoria';
// fruts[3].name = 'Olena';


//  -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.

// for (let i = 2; i < 11; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

//  -- 3 --
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
//     console.lpg( `цифра ${i}!` );
//   }

// let i = 0;
// while ( i < 5) {
//     console.log(`цифра ${i}!`);
//     i++;
// }

//  -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

// do {
//     let number = prompt('Введіть число більше за 100.');
//     if (!number || number > 100) {
//         break;
//     } else if (Number.isNaN(Number(number))) {
//         alert('Введіть коректне число!');
//     } else if (Number(number) < 100) {
//         alert('Будь ласка, введіть число більше за 100.')
//     }
// }
// while (true)

//  -- 5 --
// Вирахуйте середній вік

// const girls = [
//   { age: 23, name: "Оля" },
//   { age: 29, name: "Аня" },
//   { age: 10, name: "Юля" },
//   { age: 20, name: "Катя" },
// ];
// const averageAge = girls.reduce((summ, item) =>
//     summ + item.age / girls.length, 0);
// console.log(averageAge);