//JavaScript Higher-Order Array Loop
/*

//forEach

const fruits = ['Apple', 'Banana', 'Cherry'];
fruits.forEach((fruit,index) => {
    console.log(`${index + 1}. ${fruit}`);
});

//map

// const number = [1, 2, 3, 4, 5];
// const Squared = number.map((num) => num * num);
// console.log(Squared);

//filter

const numbers = [10, 15, 20, 25, 30];
const divisibleByTen = numbers.filter((num) => num % 10 === 0);
console.log(divisibleByTen);


// reduce 

const tranSactions = [100, -20, 300, -50, 400];
const balance = tranSactions.reduce((acc, curr) => acc + curr, 0);
console.log(balance);

//some

const ages = [16, 20, 18, 22];
const hasAdult = ages.some((age) => age >= 18);
console.log(hasAdult);

//every
const Scores = [85, 90, 78, 45];
const allPassed = Scores.every((score) => score >= 50);
console.log(allPassed);

console.log(typeof allPassed);


//find
const users = [
    {id: 1, Name: 'Ali'},
    {id: 2, Name: 'Masum'},
    {id: 3, Name: 'Auchin'},
];
const user = users.find((u) => u.id === 2);
console.log(user);

//findIndex
const products = [
    {id: 101, name: 'Masum'},
    {id: 102, name: 'Auchin'},
    {id: 103, name: 'not'},
];
const index = products.findIndex((product) => product.name === 'not');
console.log(index);

//flatMap

const nestedNumbers = [[1, 2], [3, 4], [5, 6]];
const flatMapped =nestedNumbers.flatMap((arr) => arr);
console.log(flatMapped);
*/


//JavaScript call and Apply method

// const person = {
//     name: 'Alice',
//     greet: function() {
//         console.log(`Hello, my name is ${this.name}`);
//     },
// }
// person.greet();
// const greet = person.greet;

// greet();

//the call method

// function greet(greeting, punctuation) {
//     console.log(`${greeting}, my name is ${this.name} ${punctuation}`);
// };
// const person = {
//     name: 'Masum Khan',
// };
// greet.call(person,'Hello', '!');

//The apply method
// function greet(greeting, punctuation) {
//     console.log(`${greeting}, my name is ${this.name} ${punctuation}`);
// }

// const person = {
//     name: 'charle',
// };
// greet.apply(person,['Hi', '!!']);

// const arrayLike = {
//     0: 'a',
//     1: 'b',
//     length: 2
// };
// const arr = Array.prototype.slice.call(arrayLike);
// console.log(arr);

// function multiple (a, b) {
//     return a * b;
// };
// const double = multiple.bind(null, 2);
// console.log(double(5));


//------------------------

// function person(name) {
//     this.name = name;
// }

// function Employee(name, role) {
//     person.call(this,name);
//     this.role = role;
// };
// const emp = new Employee('Dave', 'Devoloper');
// console.log(emp);