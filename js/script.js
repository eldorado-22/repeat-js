// console.log("Hello")
// console.log("Hello" + "World") // конкатенация
// console.clear()
// console.log("Hello" + " World") // конкатенация
// console.log("Hello " + "World") // конкатенация
// console.log("Hello"+ ' ' + "World") // конкатенация
// console.dir("Hello")
// console.trace('dfs')
// console.count("wq" + " dew" +  "wed")

// document.getElementById("out").innerHTML = "Hello"
// // document.getElementById("out").innerHTML = 2023;
// document.getElementById("out").innerHTML = '<q>2023</q>';
// document.getElementById("out2").innerHTML = '<s>2023</s>';
// document.getElementById("out3").innerHTML = '<b>2023</b>';
// document.getElementById("out4").innerHTML = '<i>2023</i>';
// document.getElementById("out5").innerHTML = '<u>2023</u>';

// let booleanObject = Boolean(true);
// console.log(booleanObject)

// console.log([] + 1 + 2)

// alert( 20e-1['toString'](2) );
//
// const arr = [
//     {id: 3},
//     {id: 5},
//     {id: 6},
//     {id: 7}
// ]
// console.log(arr.map((el => {
//     if (el.id === 1) {
//         el.id = 345
//     }
//     return el
// })))


// let arr = {name: 'Igor'}
// Object.assign(arr,{['age']:'25'})
// arr.name = 'Azat'
// console.log(arr)

///// SORT //////////
// const numbers = ["banana", "fruits", "apple", "swift"]
// console.log(numbers.sort())
// numbers.sort()
// console.log(numbers)

////////////////// FIND ////////////////
// const numbers = [1, 3, 5, 7, 8, 9];
// const firstEven = numbers.find(
//     function (num) {
//     return num % 2 === 0;
// });
// console.log(firstEven);
////////////////////////////////////

/////////////// PRACTICE /////////////////////////
// let str = "Hello"
// str = 5
// console.log(str)

// for(let key in  {1:1, 0:0}) {
//     console.log(key);
// }

// let a = new Array(1,2),
//     b = new Array(3);
// alert(a[0] + b[0]);
//
// console.log( "1"[0] );


// for(let i=0; i < 10; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 100);
// }


// let name = "пупкин".replace("п", "д")
// console.log(name)

// function F() { return F; }
//
// console.log( new F() instanceof F );
// console.log( new F() instanceof Function );

// if (function f(){}) {
//     console.log(typeof f);
// }

// let obj  = {}
// let jason = {
//     key: "Jason"
// }
// obj[jason] = 234
// console.log(obj[jason])
// let newValue
// console.log(newValue) // undefined
// console.log(typeof []) // object
// console.log(typeof null) // object

///////// NaN///////
// console.log(typeof NaN) // number
let arr = isNaN(10) // false
let arr2 = isNaN("Hello" ) // true
let arr3 = isNaN(NaN ) // true
console.log(arr3)

const x = NaN;
x === NaN; // false



// const mainFocusByDays = {
//     mon: 'Исправить баг в вёрстке',
//     tue: 'Разобрать почту',
//     wed: 'Написать бота',
//     thu: 'Изучить примитивные типы',
//     fri: 'Отправить резюме в Яндекс',
//     sat: null,
//     sun: null
// }
// console.log(mainFocusByDays.fri)

/////////////// PRACTICE /////////////////////////






//////////////////////////////////////////////////

// Base
//
// function isPalindrome(string) {
//     let arr = string.split('');
//     let reverseArr = arr.reverse();
//     let resString = reverseArr.join('')
//     let res = string === resString;
//     return res;
// }


// Advanced
// function isPalindrome (str) {
//     return str === str.split('').reverse().join('')
// }

// ES6

// const isPalindrome = str =>
//     str === str.split('').reverse().join('')
//
