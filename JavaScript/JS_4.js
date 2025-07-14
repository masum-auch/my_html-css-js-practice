/*
// Javascript Data Type Trying
let firstName = "Masum Khan";
firstName = "Auchin Khan";
let secondParagraph = "Javascript is very fun, so I am happy";
let multiLine = `This is a multi- line String.`;

console.log(typeof firstName);
console.log(typeof secondParagraph);
console.log(typeof multiLine);

// String concatenation
let combined = firstName + " " + secondParagraph;

console.log(combined);

// String methods

let upper = firstName.toUpperCase();
let lower = secondParagraph.toLowerCase();
let length = secondParagraph.length;
let substring = firstName.substring(7, 12);

console.log(upper, lower, length, substring);

let myName = "This is my 'Paragraph' on go";

console.log(myName);

let myLastName = `this is my name ${firstName}`;
console.log(myLastName);

let myAge = 19;
let myAge2 = 20;
let calculation = myAge + myAge2 + firstName + myAge + myAge2;

console.log(calculation);
console.log(typeof calculation);

let number = 9999999999999999n;
let number2 = 99999999999999999n;
console.log(number * number2);
console.log(typeof number);

let largNumber = BigInt("91234567801234567890");
let largNumber2 = 1234567890123456n;
console.log(largNumber + largNumber2);

// undefined data type
let someInfo;
let auchinKhan;

console.log(someInfo, auchinKhan);
console.log(typeof someInfo, auchinKhan);

function doNothing() {}
let result = doNothing();
console.log(result);

// Boolean data type
let isJavaScriptFun = true;
let isSkyGreen = false;

if (isJavaScriptFun) {
  console.log("JavaScript is indeed fun!");
} else {
  console.log("Maybe give it another try.");
}
if (isSkyGreen) {
  console.log("The sky is green!");
} else {
  console.log("The sky is not green.");
}

// null data type

let nullData = null;
console.log(nullData);

if (nullData === null) {
  console.log("nullData is null");
} else {
  console.log("nullData is not null");
}

//symbols data type

let sym1 = Symbol("This is a Ture");
let sym2 = Symbol("This is a Ture");

console.log(sym1 === sym2);
let obj = {
  [sym1]: "Value associated with sym1",
  [sym2]: "Value associated with sym2",
};
console.log(obj[sym1]);
console.log(obj[sym2]);

// Array data type
let fruits = ["Apple", "Lemon", "Peer", "Banana", "Oranges"];
fruits[3] = 'Mango';

console.log(fruits);
console.log(typeof fruits);

// Integer Number

// Floating-point Number
let float = 2.14;

// Negative number
let negative = -7;

console.log(myAge, float, negative, typeof (myAge, float, negative));

// Arihemtic operations
let sum = myAge + float;
let product = myAge * negative;
let division = float / myAge;

console.log(sum, product, division);



// object data type 

let person = {
  name: "Masum Khan",
  age: 19,
  great: function() {
    return `Hello, My name is ${this.name}`;
  }
};

//Accessing properties
console.log(person.name);
console.log(person['age']);

person.city = "New York";

console.log(person.great()); //"Hello, My name is Masum Khan"
console.log(person);



// Array data type

let arr = [1, 'two', true, null, undefined, {key: 'value' }, [3, 4]];

//Accessing elements
console.log(arr[0]);
console.log(arr[5].key);
console.log(arr[6][1]);

//Array methods
arr.push('new element');
arr.pop();
let sliced = arr.slice(1, 6);
let mapped = arr.map(item => typeof item);

console.log(arr);
console.log(sliced);
console.log(mapped);
*/

// function data type 
function add(a, b) {
  return a + b;
}

// Function experssion 
const multiply = function(a, b) {
  return a* b;
}
 
// Arrow function
const subtract = (a, b) => a - b;

// Higher-order function
function operate(a, b, operation) {
  return operation(a, b);
}

console.log(add(5, 3));
console.log(multiply(5, 3));
console.log(subtract(5, 3));
console.log(operate(5, 3, add));
console.log(operate(5, 3, multiply));

// date type exercise
let today = new Date();
console.log(today); //current data an time

// Creating a specific data
let birthDay = new Date('1995-01-01');
console.log(birthDay);

//Date methods

console.log(today.getFullYear()); // e.g., 2024
console.log(today.getMonth() + 1); // Months are zero-based
console.log(today.getDate()); // Day of the month


// Calculating difference between dates

let diffTime = today - birthDay; // Difference in milliseconds
let diffDay = diffTime / (1000 * 60 * 60 * 24);
console.log(`Difference in days: ${diffDay}`);
console.log(diffTime);

// RegExp data type
let pattern = /abc/;
let str1 = "abcdef";
let str2 = "Auchin Khan";

console.log(pattern.test(str1)); //true
console.log(pattern.test(str2)); //false

// Using RegExp With methods

console.log(str1.match(pattern)); // ["abc", index: 0, input: "abcdef", groups: undefind]
console.log(str2.replace(pattern, 'XYZ')); //sefXYZghi


let map = new Map();

// setting values
map.set('name', 'Alice');
map.set(1, 'one');
map.set(true, 'boolean ture');

// Getting values
console.log(map.get('name'));
console.log(map.get(1));
console.log(map.get(true));