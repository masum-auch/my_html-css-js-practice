//JavaScript Math
/*

// Round Number Methematical

let num = 30.157098;
console.log(Math.round(num));

// . up down
console.log(Math.ceil(num));

// . soman rakte

console.log(Math.floor(num));

//Squre Value
console.log(Math.pow(3, 2));

console.log(Math.pow(5, 2));

// Root Value 

let num2 = (64);
console.log(Math.sqrt(num2));

console.log(Math.sqrt(9));

// Positive Value Math

let num3 = -5;
console.log(Math.abs(num3));

console.log(Math.abs(-3));

// maximum or minimum number value

let num4 = [0, 1, 2, 3, 4, 5, 6];
console.log(Math.max(...num4));

console.log(Math.min(...num4));

// PI number calculation

console.log(Math.PI);

let radius = 5;
let area = Math.PI * Math.pow(radius, 2);

console.log('This is number' + area);

//Sin, Cos, Sec etc......

console.log(Math.sin(90 * Math.PI /180));

console.log(Math.tan((90 * Math.PI) /180));
*/
// ludo practice

// document.getElementById("btn").onclick = function() {
//   let randomNumber = Math.floor(Math.random() * 6) + 1;
//   let imageSource = "image/" + randomNumber + ".png";
//   document.getElementById("ludo").src = imageSource;
// };

// javaScript String Practice

// let fullName = "Mausm Khan";
// let loverName = "Auchin";
// let info = `I am ${fullName} my lover name ${loverName} uni`;
// console.log(info);

// try agin

// const fullName2 = new String("Masum");
// const fullName3 = "Masum";
// const info2 = fullName2 + " " + fullName3;
// console.log(info2);

// console.log(info.length);
// console.log(info.charAt(2));
// console.log(info.indexOf('m'));
// document.getElementById('title').innerText = info

const student = "Ali Hossain";
console.log(student.slice(-9, -4));
console.log(student.substring(-3));


const sameText = "          Ali           ";
console.log(sameText.trim());

const URL = "https://ali.com/new%20Blog";

console.log(URL.replace("%20", "-"));

console.log(student.split());