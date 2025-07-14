// JavaScript Variable.
/*
 * JavaScript variable names are case-sensitive
 ! Variable names cannot contain spaces.
 * Variables cannot be the same as reserved keywords such as `if` or `const`.
 * By convention, JavaScript variable names are written in camelCase.
 * Variables should be given descriptive names that indicate their content and usage (e.g. `sellingPrice` and `costPrice` rather than `x` and `y`).
 * You can not add number first
 * _, $ is acceptable but - not accaptable
 */

console.log("Hello World");

let firstName;

let fruits = "Banana";
console.log(`${fruits} is my Favarite, ${fruits} I like to eat`);

/*
 * Var Variable
 * You can re declare
 * You can re assaign
 * Clobal Scooped
 * var is hosted
 */

var a = 10;
var a = 11;
a = "Masum Khan";
{
  var blocked = 30;
  console.log(blocked);
}

console.log(country);
var country = "Bangladesh";

var countrys;
console.log(countrys);
countrys = "jimbabuye";

/*
 * let Variable
 ! You can not re declare
 * You can re assaign
 ? Block Scooped
 ! let is not hosted
 */
{
  let b = 10;
  b = 11;
  console.log(b);
}
// console.log(people);
// let people = 'SomeOne'

/*
 * const Variable
 ! You can not re declare
 ! You can not re assaign
 ? Block Scooped
 ! const is not hosted
 */
const c = 10;
{
  const d = 50;
  console.log(c);
  console.log(d);
}
const person = {
  firstName: "Masum Khan",
  age: 19,
};
person.country = "Bangladesh";
person.age = 32;
console.log(person);
