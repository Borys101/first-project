// let num = 1;
// while (6 > num) {
//     console.log(num);
//     num++
// }


// for (let num = 1; 5 >= num; num++) {
//     console.log(num)
// }


// let num = 1;
// do {
//     console.log(num);
//     num++
// } while (6 > num)


// let num = 8
// while (num) {
//     console.log(num);
//     num--
// }


// let num = 0;
// while (num < 3) {
//     console.log(num)
//     num++
// }


// firstOne: for (let num = 0; num < 2; num++) {
//         for (let size = 0; size < 3; size++) {
//             if (size == 1){ 
//                 break firstOne}
//                 console.log(size)
//     }
// }


// 'use strict'
// let showMessage;
// if (2 > 1) {
//     showMessage = function() {
//         console.log('Сообщение');
//     }
// }
// showMessage();


// let userInfo = {
//     name: 'Вася',
//     age: 30,
//     "58": 'fknwug3jn'
// }
// console.log(userInfo[58]);


// let userInfo = {
//     name: 'Vasya',
//     age: 30
// }
// let user = userInfo;
// user.age = 45;

// console.log(userInfo.age);


// let userInfo = {
//     name: 'Vasya',
//     age: 30,
//     showInfo() {
//         console.log(`${this.name}`);
//     }
// }
// let user = userInfo;
// userInfo = null;
// user.showInfo();


// let userInfo = {
//     name: 'Vasya',
//     age: 30,
// }
// userInfo.name = 'Lena';
// delete userInfo.name
// console.log(userInfo)


// let user = 58.2;
// console.log(typeof user)


// let numOne = Math.round((1.005 + Number.EPSILON) * 100) / 100;
// console.log(numOne);


// let value = parseFloat("135.58px");
// console.log(value)


//  let value = 58 + "Frilancer";
//  if (isNaN(value)) {
//      console.log('Result NaN');
// }


// let maximum = Math.max(10, 58, 39, -150, 0)
// console.log(maximum)


// console.log(Math.floor(58.858));



// let text = "Frilancer"
// console.log(text.slice(1, 2));

// let text = "Frilancer"
// console.log(text[1])



// let text = 'frilancer'
// console.log(text.toUpperCase())


// let text = "frilancer";
// console.log(text.slice(3, 6));


// let prep = 10;
// let prop = 10;
// console.log(prep++);
// console.log(prop--);
// console.log(prep);
// console.log(prop);


// const numberOfFilms = +prompt('How many films did you watch?', '');
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };
// for (let i = 0; i < 2; i++) {
//    const nameOfFilm = prompt('What film did you watch last?', ''),
//          markOfFilm = +prompt('Which mark do you put?', '');
//    if (nameOfFilm != '' && markOfFilm != '' && nameOfFilm != null && markOfFilm != null && nameOfFilm.length < 50) {
//       personalMovieDB.movies[nameOfFilm] = markOfFilm;
//       console.log('done');
//    } else {
//       console.log('error');
//       i--;
//    } 
// }
// console.log(personalMovieDB);


// const number = 51;
// if (number > 56) {
//     console.log('False');
// } else if (number == 52) {
//     console.log('False');
// } else {
//     console.log('True');
// }

// (number > 51) ? console.log('False') : console.log('True');


// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }





// let result = '';
// const lenght = 7;
// for (let i = 1; i < lenght; i++) {
//    for (let j = 0; j < i, j++;) {
//       result += '✧';
//    }
//    result += '\n';
// }
// console.log(result);

// var lines = 7;
// var str = " ";
// var star = "*";
// for (var i = 0; i < lines; i++) {
//   str += star;
//   console.log(str);
// }

// let i = 2;
// while (i <= 16) {
//    if (i % 2 === 0) {
//       i++;
//       continue;
//    } else {
//       console.log(i);
//    }
//    ++i;
// }



// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];
// for (let i = 1; i <= data.length; i++) {
//    result[i - 1] = data[data.length - i];
// }
// console.log(result);


// let result = '';
// for (i = 1; i < 7; i++) {
//    result += '*';
//    console.log(result);
// }


// let arr = [10, 20, 30, 50, 235, 3000];
// for (let i = 0; i < arr.length; i++) {
//    let num = String(arr[i]);
//    let char = num[0];
//    if (char == 1 || char == 2 || char == 5) {
//       console.log(arr[i]);
//    }
// }

// let result = '';
// for (let i = 1; i < 7; i++) {
//    result += '*';
//    console.log(result);
// }


// function getMathResult(num, times) {
//    if (typeof(times) !== 'number' || times <= 0) {
//        return num;
//    }

//    let str = '';

//    for (let i = 1; i <= times; i++) {
//        if (i === times) {
//            str += `${num * i}`;
//            // Тут без черточек в конце
//        } else {
//            str += `${num * i}---`;
//            // Это тоже самое, что и
//            // str = str + num * i + "---"
//        }
//    }

//    return str;
// }

// Даны размер ипотечного кредита (S — 2 млн.руб), процентная ставка (p  — 10%), кол-во лет (years — 5). Н
// айти переплату по кредиту, значение переплаты должно содержаться в переменной perepl.

// let s = 2000000;
// let p = 10;
// let years = 5;
// let perep1;
// perep1 = s + (s / 100 * 10) * 5;
// console.log(perep1)

// function credit(s, years) {
//    let p = 10;
//    let perep1;
//    perep1 = s + (s / 100 * p) * years;
//    console.log(perep1);
// }
// credit(1000000, 3);


// Создайте функцию avg() , которая будет находить среднее значение по всем своим аргументам (аргументы величины числовые)
// function avg(arg1, arg2, arg3, arg4) {
//    result = (arg1 + arg2 + arg3 + arg4) / avg.length;
//    console.log(result);
// }
// avg(1, 2, 3, 4);


// function calculateVolumeAndArea(length) {
//    if (typeof(length) != 'number' || length % 1 != 0 || length < 0) {
//       console.log('При вычислении произошла ошибка');
//    } else {
//       let V = length * length * length;
//       let S = 6 * (length * length);
//       console.log(`Объём куба: ${V}, площадь всей поверхности: ${S}`);
//    }
// }

// calculateVolumeAndArea(5);


// function getCoupeNumber(seats) {
//    if (typeof(seats) != 'number' || seats % 1 != 0 || seats < 0) {
//       return'Ошибка. Проверьте правильность введенного номера места';
//    } else if (seats == 0 || seats > 36) {
//       return'Таких мест в вагоне не существует';
//    }
//    for (let i = 4; i <= 36; i += 4) {
//       if (seats <= i)
//          return Math.ceil(i / 4);
//          break;
//    }
// }
// getCoupeNumber(4);

// function getCoupeNumber(seatNumber) {
//    if (typeof(seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
//        console.log("Ошибка. Проверьте правильность введенного номера места");
//    }

//    if (seatNumber === 0 || seatNumber > 36) {
//        console.log("Таких мест в вагоне не существует");
//    }

//    for (let i = 4; i <= 36; i = i + 4) {
//        if (seatNumber <= i) {
//            console.log(Math.ceil(i / 4));
//            break;
//        }
//    }
//    // тут очень много вариантов решения, но выбрал один из элегантных :)
// }

// getCoupeNumber(36);

// function getTimeFromMinutes(minutes) {
//    if (typeof(minutes) !== 'number' || minutes < 0 || !Number.isInteger(minutes) || minutes <= 600) {
//       console.log("Ошибка. Проверьте данные");
//    }
//    const resultHours = Math.floor(minutes / 60);
//    const resultMinutes = minutes % 60;
//    let hoursStr;
//    switch (resultHours) {
//       case 0:
//          hoursStr = 'часов';
//          break;
//       case 1:
//          hoursStr = 'час';
//          break;
//       case 2:
//       case 3: 
//       case 4:
//          hoursStr = 'часа';
//          break;
//       default:
//          hoursStr = 'часов';
//          break;
//    }
//    console.log(`Это ${resultHours} ${hoursStr} и ${resultMinutes} минут`)
// }
// getTimeFromMinutes(105);


// function findMaxNumber(num1, num2, num3, num4) {
//    if (typeof(num1) !== 'number' || 
//       typeof(num2) !== 'number' || 
//       typeof(num3) !== 'number' || 
//       typeof(num4) !== 'number') {
//          console.log(0);
//    } else {
//       console.log(Math.max(num1, num2, num3, num4));
//    }
// }
// findMaxNumber(1, 2, 3);



// Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. 
// С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = '';
// for (let i = 0; i < arr.length; i++) {
//     if (i === arr.length - 1) {
//         result += `-${arr[i]}-`;
//     } else {
//         result += `-${arr[i]}`;
//     }
// }
// console.log(result);

// В бесконечном цикле делается запрос на ввод двух чисел 
// (два отдельных вызова функции prompt()). Числа сравниваются между собой, 
// и выводится одна из трёх фраз: «числа равны», «первое число меньше», 
// «второе число меньше». Если пользователь ввёл не число, выводится фраза 
// «первый ввод – 
// не число» (или «второй ввод – не число»), и выполнение скрипта прекращается.

// Нужно написать цикл, который перебирает числа от 4 до 37 и выполняет следующие 
// действия:

// Если число кратно 2, но не кратно 4, то прибавляет его к результату;
// Если число кратно 3, то отнимает его от результата;
// Если число кратно 4, то умножает его на результат;
// Если число кратно 5, то просто выводит в консоль это число и не изменяет 
// результат (даже если число подпадает под условия выше);
// Если число не попадает под условия выше, то пропускает его.

// const obj = {
//     name: 'Borys',
//     width: 1024,
//     height: 1024,
//     color: {
//         border: 'black',
//         bg: 'red'
//     }
// };

// for (let key in obj) {
//     if (typeof(obj[key]) === 'object') {
//         for (let i in obj[key]) {
//             console.log(`Свойство ${i} имеет значение ${obj[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${obj[key]}`);
//     }
// }

//! const arr = [1, 422, 36, 4];
//! const sorted = arr.slice().sort((a, b) => a - b);

//! console.log({arr, sorted});

//! const alphabet = 'ёйцукенгшщзхъфывапролджэячсмитьбю'.split('');
//! const collatore = new Intl.Collator('ru-RU');
//! console.log(alphabet.sort(collatore.compare));

// const video = ['youtube', 'twitch', 'rutube'],
//       blogs = ['wordpress', 'livelaunch'],
//       internet = [...video, ...blogs, 'netflix', 'megogo'];
// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// const arr = [2, 5, 7];
// log(...arr);

// Описание задачи: 
// Напишите функцию, которая заполняет новый массив предоставленным 
// значением.
//   * Ожидаемый результат: (3, 'a') => ['a', 'a', 'a']

// let mainArr = [];
// function arr(num, symbol) {
//     if (num > 0) {
//         for (let i = 0; i < num; i++) {
//             mainArr[i] = symbol;
//         } 
//     } else {
//             mainArr = ['Массив пуст'];
//     }
//     console.log(mainArr);
// }
// arr(2, 'a');


// Описание задачи: Напишите функцию, которая разворачивает массив 
// в обратном порядке.
//   * Ожидаемый результат: [1, 2, 3] => [3, 2, 1]

// let mainArr = [1, 2, 3, 4, 5];
// let mainArr2 = [];
// function arr(array) {
//     for (let i = 0; i < mainArr.length; i++) {
//         mainArr2[i] = mainArr[(mainArr.length - 1) - i];
//     }
//     array = mainArr2;
//     console.log(array);
// }
// arr(mainArr);


// const anyNumber = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
// for (let i = 0; i < anyNumber.length; i++) {
//     console.log(`Index: ${i}, number: ${anyNumber[i]}`);
// }

// let max = anyNumber[0];
// for (let i = 0; i < anyNumber.length; i++) {
//     if (anyNumber[i] > max) {
//         max = anyNumber[i];
//     } else {}
// }
// console.log(max);

// let max = 70;
// for (let i = 0; i < anyNumber.length; i++) {
//     if (anyNumber[i] === max) {
//         console.log(i);
//     } else {}
// }


// let user = [
//     {
//       name: "John",
//       age: 30
//     },
//     {
//       name: "Bob",
//       age: 21
//     },
//     {
//       name: "Anna",
//       age: 19
//     }
// ];
// // let obj = {};
// // obj = user[1];
// // console.log(obj);
// for (let i = 0; i < user.length; i++) {
//     if (user[i].name === 'Anna') {
//         user[i];
//     } else {
//         continue;
//     }
// }
// console.log(user);


// const children = document.querySelector('.grid');
// console.log(children);
// const parents = children.parentElement;
// console.log(parents);
// for (let node of children) {
//     if (node.nodeName == "#text") {
//         continue;
//     } else {
//         console.log(node);
//     }
// // }
// function factorial(n) {
//     if (typeof(n) !== 'number' || isNaN(n) || n % 1 !== 0) {
//         return 'Mistake!';
//     } else if (n <= 0) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }
// console.log(factorial(2));


// function factorial(n) {
//     if (typeof(n) !== 'number' || !Number.isInteger(n)) {
//         return "Ошибка, проверьте данные";
//     } else if (n >= 1) {
//         return n * factorial(n - 1);
//     } else {
//         return 1;
//     }
// }
// console.log(factorial(5));

// function factorial(n) {
//     return n ? n * factorial(n - 1) : 1;
// }

// factorial(5);


// function rFact(num){
//     if (num === 1)
//         return 1;
//     else
//         return num * rFact(num - 1);
// }
            
// console.log(rFact(5));

// function double(num1, num2) {
//     if (num1 === 0 || num2 === 0) {
//         return 0;
//     } else {
//         return num1 * num2;
//     }
// }
// console.log(double(5, 10));

// let result = '';
// function strNumbers() {
//     for (let i = 1; i <= 30; i++) {
//         result += `${i} `;
//     }
// }
// strNumbers();
// console.log(result);

// let i = 1;
// let results = '';
// function strNumber1() {
//     results += `${i} `;
//     i++;
//     if (i > 30) {
//         return;
//     }
//     strNumber1();
// }
// strNumber1();
// console.log(results);


// function randomInteger(min, max) {
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
// }

// let result = 0;
// let add = 0;
// function social() {
//     add = randomInteger(0, 100);
//     console.log(`Дали: ${add}`);
//     result += add;
//     console.log(`Результат: ${result}`);
//     if (result >= 300) {
//         console.log('Мечта сбылась!');
//         return;
//     }
//     social();
// }
// // social();


// function sum2() {
//     let result1 = 0;
//     while (true) {
//         let add1 = randomInteger(0, 100);
//         console.log(`Дали: ${add1}`);
//         result1 += add1;
//         console.log(`Сумма: ${result1}`);
//         if (result1 > 300) {
//             console.log('Мечта сбылась!');
//             return;
//         }
//     }
// }
// sum2();


// const users = {
//     'ivanov': {
//         age: 25,
//         parent: {
//             'ivanov-a': {
//                 age: 45
//             },
//             'ivanov-b': {
//                 age: 43,
//                 parent: {
//                     'sergeev-a': {
//                         age: 88,
//                         parent: {
//                             'lionenko': {}
//                         }
//                     }
//                 }
//             }
//         }
//     },
//     'kostenko': {
//         age: 56,
//         parent: {
//             'ignatenko': {

//             },
//             'sniezko': {
//                 age: 45
//             }
//         }
//     }
// };

// function usersParent(obj) {
//     if (obj.parent !== undefined) {
//         for (let key in obj.parent) {
//             console.log(key);
//             usersParent(obj.parent[key]);
//         }
//     }
// }
// for (let key in users) {
//     usersParent(users[key]);
// }
// function usersParent(obj) {
//     if (obj.parent !== undefined) {
//         for (let key in obj.parent) {
//             console.log(key);
//             usersParent(obj.parent[key]);
//         }
//     }
// }
// for (let key in users) {
//     usersParent(users[key]);
// }


// let result = 1;
// function factorial(num) {
//     if (typeof(num) !== 'number' || num % 1 !== 0 || num === 0) {
//         result = 'Введите правильное число!';
//     } else if (num === 1) {
//         return 1;
//     } else {
//         result = num * factorial(num - 1);
//         return result;
//     }
// }
// factorial(0);
// console.log(result);

window.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.btn'),
    wrapper = document.querySelector('.wrapper');
    

    function myAnimation() {
        
        const box = document.querySelector('.box');
        let pos = 0;
        const id = setInterval(frame, 10);
        function frame() {
            if (pos === 300) {
                clearInterval(id);
            } else {
                pos++;
                box.style.top = pos + 'px';
                box.style.left = pos + 'px';
            }
        }
    }
    btn.addEventListener('click', myAnimation());
});
