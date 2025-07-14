/*
// Function Declaration in JavaScript
function greet (name) {
    console.log("Hello, " + name + "!");
}
greet("Masum Khan");

function greet (name) {
    console.log("Hello, " + name + "!");
}
greet("Tehosin"); // Output: Hello, Tehosin!

// Function Expression in JavaScript

function greet (name) {
    console.log("Hello, " + name + "!");
}
greet("Tehosin");

const add = function(a, b) {
    return a + b
}
console.log(add(2,3)); //Output: 5

// Arrow Function in JavaScript

const multiplay = (a, b) => {
    return a * b
}
console.log(multiplay(4,5));

//Concise Syntax return keyword bade

const Squar = x => x * x;
console.log(Squar(6));

// no parameters: use empty parantheses

const sayHello = () => console.log("Hello World");
sayHello();


// Parameters and Arguments in JavaScript

function introduce(name, age){
    console.log(`My name is ${name} and I am ${age} year old.`);
}
introduce("Bob", 25);

// default parameters

function greet (name = "Guest") {
    console.log(`Hello, ${name}`);
}
greet();
greet("Carol");

// Rest Parameters
function sum(...numbers) {
    return numbers. reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4)); //Output

// Return Values in JavaScript

function subtract(a, b) {
    return a - b;
}
const result = subtract (10, 4);
console.log(result); // Output: 6;
//Early Return
function checkAge(age) {
    if(age < 18) {
        return "Minor"
    }else{
        return "Adult"
    };
};
console.log(checkAge(16));
console.log(checkAge(30));

// Scope and Closures in JavaScript

let globalVar = "I am global";
function demoScope() {
    let functionVar = "I am inside a function";
    if(true) {
        let blockVar = "I am inside a block";
        console.log(blockVar);
    }
}
demoScope();
console.log(globalVar);

// closures
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log(`ouler: ${outerVariable}, Inner: ${innerVariable}`);
    };
};
const newFunction = outerFunction("outside");
newFunction("inside");

// Higher-Order Function in JavaScript
//1. Function as Arguments
function opeate(a, b, operation) {
    return operation(a, b);
}
function add(x, y) {
    return x + y;
}
console.log(opeate(5, 3, add));
//2.Functions Returing Functions
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
};
const double = multiplier(2);
console.log(double(7));

// common Higher - Order Function in JavaScript
const numbers = [1, 2, 3, 4];
const squared = numbers.map(num => num * num);
console.log(squared);

// callback Function in JavaScript

function fetchDAta(callback) {
    setTimeout ( () => {
        const data = {name: "Dava", age: 30};
        callback(data);
    }, 1000);
}
function displayData(data) {
    console.log(`name: ${data.name}, Age: ${data.age}`);
};

fetchDAta(displayData);

// using anonymous function as callbacks

fetchDAta(function(data){
    console.log(`name: ${data.name}, age: ${data.age}`);

});

(function(name) {
    console.log(`Hello, ${name}!`);
})("Evm"); // Output: Hello, Eve!

*/

// Practice Exercises- 1. create a function to calculate factorial

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial (5));


// Practice Exercises- 2. Convert Celsius to Fahrenheit:

const celsiusToFahrenheit = celsius => (celsius * 9/5) + 32;

console.log(celsiusToFahrenheit(25));

// Practice Exercises- 3. Filter Even Numbers:

const getEvenNumbers = numbers => numbers.filter(num => num % 2 ===0);
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));



// Practice Exercises- 4. create a Higher - Order Function

function repeat(operation, num) {
    for(let i = 0; i < num; i++) {
        operation();
    }
}
function sayHello() {
    console.log("Hello!");
}
repeat(sayHello, 3);

// Practice Exercises- 4. Implement a Simple Calculator:

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiplay = (a, b) => a * b;
const divide = (a, b) =>  b !== 0 ? a / b : "cannot divide by zero";

console.log(add(10, 5));
console.log(subtract(10, 5));
console.log(multiplay(10, 5));
console.log(divide(10, 0));

//---------------------
