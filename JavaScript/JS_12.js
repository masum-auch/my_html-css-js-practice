// JavaScript If, Else, Else if, Switch.
/*
let age = 15;
if (age > 40) {
    console.log('you are expirad');
} else if(age > 18) {
    console.log('yor are ready to open a google Accound');
}
 else{
    console.log('you are not ready');
};

//Switch

let catagory = 'long';
let carType;

switch(catagory) {
    case 'car': carType = 'This is a car';
    break;
    case 'Motor Bike': carType = 'This is a Love motor Bike';
    break;
    case 'cycle': carType = 'This is a my Cycle.'
    break;
    case 'Turck': carType = 'This is a new Turck.'
    break;
    default: carType = 'This is very Imoportent Company.'
}

console.log(carType);
*/

// JavaScript Loop

// let car = ['BMW', 'Volvo', 'Toyota', 'Ford', 'Tesla', 'Sony'];

// car.push('Masum');
// console.log(car);
// console.log(car[2]);

// for (let i = 0; i < 5; i++) {
//     // console.log(car);
//     console.log(car[i]);
// };

// for (let i = 0; i < car.length; i++) {
//     console.log(car[i]);
// }

// For In Loop

// let Person = {
//     name: 'Masum',
//     age: 20,
//     country: 'Bangladesh',
//     Job: 'Software Developer'
// }

// for (let i in Person) {
//     let capLatter = i.charAt(0).toUpperCase() + i.slice(1);
//     console.log(capLatter + ': ' + Person[i]);
// };

// car.forEach(function(i) {
//     console.log(i);
// });

//for of loop
// for(let i of car) {
//     console.log(i);
// }

//---------------------------------------


/*
//JavaScript Loop Project

//Guess The Number function

function guessTheNumber(difficulty) {
  let randomNumber;
  let attemps = 0;
  let maxAttemps;
  let range;
  //set difficulty-based parameters
  switch (difficulty) {
    case "easy":
      range = 10;
      maxAttemps = 5;
      randomNumber = Math.floor(Math.random() * 10) + 1;
      //range number
      console.log(randomNumber);
      break;
    case "medium":
      range = 100;
      maxAttemps = 7;
      randomNumber = Math.floor(Math.random() * 100) + 1;
      console.log(randomNumber);
      break;
    case "hard":
      range = 1000;
      maxAttemps = 10;
      randomNumber = Math.floor(Math.random() * 1000) + 1;
      console.log(randomNumber);
      break;
    default:
      console.error("Plaese Choose The (Easy, Medium, Hard) Item.");
  }
  //get user input and check guesses.

  while (attemps < maxAttemps) {
    let guess = parseInt(
      prompt(`Guess a Number between 1 and ${range}(Inclusive).You have 
                ${maxAttemps - attemps} attemps left.`)
    );
    attemps++;
    if (guess === randomNumber) {
      console.log(
        "Congratulations! You gussed the number in",
        attemps,
        "attemps"
      );
      break;
    } else if (guess < randomNumber) {
      console.log("Too Low. Try Again.");
    } else {
      console.log("Too High. Try Again.");
    }
    console.log(guess); 
  }
  if (maxAttemps === attemps) {
    console.log("Sorry, You Ran Out of attemps. The number was", randomNumber);
  }
}

//get user input defficulty.
let difficulty = prompt(
  "Choose difficulty (easy, medium, hard) Masum Khan Use JS code"
).toLowerCase();
guessTheNumber(difficulty);
// console.log(difficulty);
*/

//JavaScript Strict Mode

// 'use strict';
let x = 5;
console.log(x);

name(5, 4);
function name(p1, p2){
  'use strict';
  let y = 5;
  console.log(p1, p1);
};

let package = 'Some Text';
let public = 'Some Text';
let private = 'Some Text';
console.log(public);

