//JavaScript Number.

// const X = 99999999999999999999;
// const y = 5.5;
// console.log(X);

// const a = 0.6;
// const b = 0.7;
// const l = a + b;

// console.log((a*10 + b*10)/10);

// or

// console.log(l.toFixed(1));

// console.log(new Number(l));

// const p = 10;
// const q = 20;
// const r = 300;

// console.log(p + q + r + l);

// console.log(l + p + q + r);

// console.log(p + q + l + r);

// const d = 'javaScript';
// const c = 20;
// console.log(d / c);

// Infinity Porperty use

let num = 5;
let value = '';
while (num != Infinity) {
  num = num * num;
  value = value + num + '<br>';
}
// document.getElementById("title").innerHTML = value;


// Bainary Calculate

const a = 30;
const b = 20;
const c = 148;
const l = a + b + c;
// console.log(l.toString(16));

const g = 300;
const h = new Number(300);
// console.log(g==h);

// console.log(g===h);

const r = 3;
// console.log(r.toPrecision(3));

const f = 9.33333333333;
// console.log(f.toFixed(12));

let newNum = Number.EPSILON;
newNum = Number.MAX_VALUE;
newNum = Number.MIN_VALUE;

newNum = Number.POSITIVE_INFINITY;
newNum = Number.NEGATIVE_INFINITY;
newNum = Number.NaN;
newNum = Number.prototype
console.log(newNum);
const myDate = new Date(); 
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());






