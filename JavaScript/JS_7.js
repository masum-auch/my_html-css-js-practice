// JavaScript Arrar
const language = ["HTML", "CSS", "JavaScript", "PHP", true, 50];
//const language2 = new Array('HTML', 'CSS', 'JavaScript', 'PHP', true, 50)


// 4 number index xchange
language[4] = "Tailwind CSS";
// 5 number index xchange
language[5] = 'React.JS';

//Item long 

language[6] = 'Vue.js';
language[7] = 'Laravel';

// if Item without list

//console.log(language[2]);

/*
// The array is represented as a string
console.log(language.toString());

//intem select for need
console.log(language.length);
//First Item Select
console.log(language[0]);

//And last Item Select

console.log(language[language.length - 1]);



console.log("Hello World");
*/

/*
const person = [];
person[firstName] = 'Masum Khan';
person[lastName] = 'Auchin';
person[2] = 35;
console.log(person[3]);
console.log(person.length);

*/
//console.log(language[5]);
//latest mathod
// console.log(language.at(5));
// console.log(language.toString());
// console.log(language.join(' $ '));


//const num = [20];
// const num = new Array(20);
// console.log(num);


//delete or add method
// console.log(language[language.length - 1]);

// language.pop();

// language.push('Angular.JS');

//Or First Item Add

// language.unshift('Basic Compting')

// language.shift();
language.splice(2, 0, 'Info', 'Info2');

language.splice(0, 2);
console.log(language);

// onk Array

const x = [1, 2, 3, 4];
const y = [1, 2, 3, 4];
const p = [2, 3, 4,];
const z = x.concat(y, p);

console.log(z);

// Array bitore Array
const a = [[1, 2, 3, 4[3, 4, 5]], [5, 6, 7, 8], [9, 10, 11, 12]];
console.log(a); 
console.log(a.flat());















