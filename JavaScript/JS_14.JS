//JavaScript Filter, Map and Reduce
/*
const fruits = ["mango", "Banana", "Orange", "Graps"];

const country = [
  ["Bn", "Bangladesh"],
  ["In", "India"],
  ["Pk", "Pakistan"],
  ["NP", "Nepal"],
];

// country.set('Bu', 'Butan');
// const myCountry = {
//   Bn: 'Bangladesh',
//   In: 'India',
//   Pk: 'Pakistan',
//   Np: 'Nepal',
// };

const stack = [
  {
    name: "MERN Stack",
    property: "Mongo, Express, React, Node",
    foundation: "JavaScript",
    tranding: true,
    price: 5000,
  },
  {
    name: "MEAN Stack",
    property: "Mongo, Express, Angular, Node",
    foundation: "JavaScript",
    tranding: false,
    price: 3000,
  },
  {
    name: "Laravel",
    property: "JavaScript, Vue, PHP, Laravel, MySQL",
    foundation: "PHP",
    tranding: true,
    price: 4000,
  },
  {
    name: "WordPress",
    property: "JavaScript, PHP, WordPress, MySQL",
    foundation: "PHP",
    tranding: false,
    price: 3500,
  },
];

// fruits.forEach(fruit => console.log(fruit));

// const fruitCapB = fruits.filter((fruit) => fruit.toLowerCase().startsWith('B'));

const fruitCapB = fruits.filter((fruit) => fruit.toLowerCase().startsWith("b"));

const fruitLen5 = fruits.filter(fruit => fruit.length === 5);

const fruitStarG = fruits.filter(fruit => fruit.toLowerCase().includes('G'))


// console.log(fruitLen5); 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8 , 9];

// const big5 = numbers.filter(num => {
//     return num < 5;  
// });

// console.log(big5);


const forNums = [];

numbers.forEach(num => {
  if(num > 5) {
    forNums.push(num);
  }
});
// console.log(forNums);

let userStack = stack.filter(sk => sk.foundation === 'JavaScript');
// console.log(userStack);

//

const myNumber = numbers.map(num => num + 5);
// console.log(myNumber);

const myNum = numbers
.map(num => num + 5)
.map(num => num * 5)
.filter(num => num >= 40);
console.log(myNum);

//Reduce
// const myTotal = numbers.reduce((acc, currValue) => acc + currValue, 0)
// console.log(myTotal);

const myTotal = numbers.reduce((acc,curvalue) => {
  console.log(`Accumulator ${acc} and currentValue ${curvalue}`);
  return acc + curvalue;

}, 0);
console.log(myTotal);

const coursePrice = stack.reduce((acc, course) => acc + course.price, 500);
console.log(coursePrice);



//JavaScript Call and Apply Method.

const greenLine = {
  bus: "Green Line Paribahan",
  bCode: "GL",
  ticket: [],
  book(setNumber, name) {
    console.log(
      `${name} booked a seat on ${this.bus} ticked ${this.bCode}-${setNumber}`
    );
    this.ticket.push({ ticketInfo: `${this.bCode}-${setNumber}`, name });
  },
};

greenLine.book("C1", "Masum Khan");
greenLine.book("C2", "Auchin Ahmed");

console.log(greenLine);

const shohagh = {
  bus: "Shohagh Paribahan",
  bCode: "SH",
  ticket: [],
};

const book = greenLine.book;

// book('B1', 'Kawcher Hossain');

book.call(shohagh, "B1", "Kawcher Hossain");
book.call(shohagh, "B2", "Durjoy Hossain");
book.call(greenLine, "B2", "Auchin Ahmed");
console.log(shohagh);

const hanif = {
  bus: "Hanif Paribahan",
  bCode: "HN",
  ticket: [],
};

book.call(hanif, "B2", "Durjoy Hossain");

//Apply

const ticketData = ["B2", "Durjoy Hossain"];

book.apply(greenLine, ticketData);

book.apply(hanif, ["A2", "Ahad Hossain"]);

//Bind
// const ticketSH = book.bind(shohagh);
// ticketSH('E1', 'Ali Hossain')

// const person = {
//   firstName: 'Auchin',
//   lastName: 'Masum',
//   display: function() {
//     console.log(this.firstName + ' ' + this.lastName);
//   },
// };
// const display = person.display;

// console.log(setTimeout(display.bind(person), 10000));

greenLine.busses = 20;
greenLine.buyBus = function () {
  // console.log(this);
  this.busses++;
  console.log(this.busses);
};
// greeenLine.busBus();

document
  .querySelector('.btn')
  .addEventListener('click', greenLine.buyBus.bind(greenLine));


  //Partial Application

  const addTAX = (rate, value) => value + (value * rate) / 100;
  console.log(addTAX(10, 100));

  const addVAT = addTAX.bind(null, 15);
  console.log(addVAT(100)); 

  */

  const aFunction = function(a, b) {
    console.log(`A Simple Function ${a + b}`);
  };
  aFunction(3, 5);
  aFunction(7, 5);


  (function (a, b){
    console.log(a * b);
  }) (4,4);

  (function (a, b){
    console.log(a + b);
  })(5, 5);

  ((a, b) => console.log(a * b))(3, 5);
  
  //DOM

  (function () {
    const h3 = document.querySelector('.h3');
    const h4 = document.querySelector('.h4');

    h3.style.backgroundColor = 'red';
    h4.style.backgroundColor = 'yellow';
  })();

  const myModule = (function () {
    let privateVar = 'This is a Private Variable';
    function privateFunction() {
      console.log('This is a private function');
    }

    return {
      publicVar: 'This is a public variable',
      pubMethod: function () {
        privateFunction();
        return 'This is a public Method';
      },
    };
  })();
  // console.log(myModule.privateVar); //unaccessible
  // console.log(myModule.privateFunction()); //unaccessible

  console.log(myModule.publicVar);
  console.log(myModule.pubMethod());




  