// // JavaScript Functions
// function myFunction(fastName, lastName, age, dateOfBirth = 25) {
//     console.log('Hello ' + fastName + ' ' + lastName + ' I Old ' + age + ' ' + dateOfBirth);
// }
// myFunction('Auchin');
// myFunction('Masum', 'Khan', '19', '20');
// myFunction(' ', ' ', ' ', 'age')


// function isSubscribe() {
//     console.log('Subscribe Our Channel');
// }
// document.getElementById('btn').addEventListener
// ('click', isSubscribe);


// (function (message) {
//     console.log('I am self-Invokeing Function', message);
// })('Hello');

// let maths = function (x, y) {
//     return x * y;
// }
// console.log(maths(3, 4));
// console.log(maths(3, 5));

// function newFunc() {
//     let firstName = 'Masum Khan';
//     console.log(firstName);
// }
// newFunc();

let numbers = [4, 5, 6, 7];
let sqNumbers = numbers.map(function (number) {
    return number * number;
});

// console.log(sqNumbers);

// let add = function (x, y) {
//     return x + y;
// }
// console.log(add(4,5));


let add =(x, y) => x + y;
console.log(add(5, 6));


function greet (firstName) {
    function sayHello() {
        alert('Hello ' + firstName)
    }
    return sayHello();
}
greet('Masum');
