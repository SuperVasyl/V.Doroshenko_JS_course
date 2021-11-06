let a = 10;
console.log(a);
console.log(typeof a);

const a2 = 10;
console.log(a2);
console.log(typeof a2);

var a3 = 10;
console.log(a3);
console.log(typeof a3);

let b = "text";
console.log(b);
console.log(typeof b);

const b2 = "text_two";
console.log(b2);
console.log(typeof b2);

var b3 = "text_three";
console.log(b3);
console.log(typeof b3);

let c = true;
console.log(c);
console.log(typeof c);

const c2 = true;
console.log(c2);
console.log(typeof c2);

var c3 = true;
console.log(c3);
console.log(typeof c3);

let d;
console.log(d);
console.log(typeof d);

// const d2;
// console.log(d2);
// console.log(typeof d2); //Const wothout meaning makes mistakes in terminal

var d3;
console.log(d3);
console.log(typeof d3);

let e = null;
console.log(e);
console.log(typeof e);

const e2 = null;
console.log(e2);
console.log(typeof e2);

var e3 = null;
console.log(e3);
console.log(typeof e3);

let f = 900719925124740999n;
console.log(f);
console.log(typeof f);

const f2 = 900719925124740999n;
console.log(f2);
console.log(typeof f2);

var f3 = 900719925124740999n;
console.log(f3);
console.log(typeof f3);

let value = Symbol('Hello');
console.log(value);
console.log(typeof value);

const value2 = Symbol('Hello, my World');
console.log(value2);
console.log(typeof value2);

var value3 = Symbol('Hey. World');
console.log(value3);
console.log(typeof value3);

let student = {};
console.log(student);
console.log(typeof student);

var teacher = {};
console.log(teacher);
console.log(typeof teacher);

const name = {};
console.log(name);
console.log(typeof name);

// number -> string
let g = 1;
let g2 = g.toString();
console.log(g2);

let g3 = 12.45;
let g4 = g3.toString();
console.log(g4);

let g5 = 3e5;
let g6 = g5.toString();
console.log(g6);

let g7 = 3 / 0;
let g8 = g7.toString();
console.log(g8);

let g9 = "abc"/3;
let g10 = g9.toString();
console.log(g10);
// string-> number
let str = "123";
console.log(str);
console.log(typeof str);
let num = Number(str); 
console.log(num);
console.log(typeof num);

let str2 = "null";
console.log(str2);
console.log(typeof str2);
let num2 = Number(str2);
console.log(num2);
console.log(typeof num2);

let str3 = "true";
console.log(str3);
console.log(typeof str3);
let num3 = Number(str3);
console.log(num3);
console.log(typeof num3);

let str4 = "undefined";
console.log(str4);
console.log(typeof str4);
let num4 = Number(str4);
console.log(num4);
console.log(typeof num4);

let str5 = "0";
console.log(str5);
console.log(typeof str5);
let num5 = Number(str5);
console.log(num5);
console.log(typeof num5);

// Arithmetic Operators
console.log(1 + "2"); // 12. /js convert number to string because it is easier.
console.log(" " + 1 + 0); // 10. /js convert number to string. It is easier.
console.log(" "- 1 + 0); // -1. /It is easier to convert string in numbers.
console.log("2" * "3"); // 6. /Js can`t multiplicate strings. So it is converted to numbers.
console.log(2 + 2 + "px"); // 4px. /First number + number. Then it is easier to convert number to string.
console.log("px" + 2 + 1); // px21. /String + string + string, because it is easyer.
console.log("2" - 1); // 1. /Easyer to convert string in number.
console.log("2px" - 1); // Nun. /It can`t convert string with alfabet letters.
console.log(null + 1); // 1. /Js think than "null" equal to "0".
console.log(undefined + 1); //Nun. /Js can`t understand meaning of "undefined".