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

Даны размер ипотечного кредита (S — 2 млн.руб), процентная ставка (p  — 10%), кол-во лет (years — 5). Н
айти переплату по кредиту, значение переплаты должно содержаться в переменной perepl.

let s = 2000000;
let p = 10;
let years = 5;
let perep1;
perep1 = s + (s / 100 * 10) * 5;
console.log(perep1)

function credit(s, years) {
   let p = 10;
   let perep1;
   perep1 = s + (s / 100 * p) * years;
   console.log(perep1);
}
credit(1000000, 3);


Напишите функцию hello2(), которая при вызове будет принимать переменную name 
(например, «Василий») и выводить строку (в нашем случае «Привет, Василий»).  
В случае отсутствующего аргумента выводить «Привет, гость»
function hello2(name) {
   if (name) {
      console.log(`Hello, ${name}`);
   } else {
      console.log('Hello, visiter!');
   }
}
hello2('Alex');