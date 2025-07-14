//JavaScript this
// console.log(this);

// var firstName = 'Masum';

// function myFunction() {
//     return this;
// };
// console.log(myFunction());

// //Button

// const myBtn = document.querySelector('button');
// myBtn.addEventListener('click', function() {
//     console.log(this);
// });

//
// const student = {
//     fName: 'Ali',
//     sInfo: function() {
//         return`${this.fName} Love to read`;
//     },
// };
// console.log(student.sInfo());

// const student = {
//     fName: 'Ali',
//     sInfo: function() {
//         return `${this.fName} Love to read`
//     },


// arrowFunction: () => {
//     return `${this.fName} Love to read`;
// },

// };
// console.log(student.sInfo());
// student.fName = 'Shovo';
// console.log(student.sInfo());
// console.log(student.arrowFunction());
/*
//
function newPhone() {
    let phone = 'Android';
    console.log(this.phone);
}
newPhone();

const game = {
    gName: 'NfS',
    gInfo: function () {
        console.log(`love to play ${this.gName}`)
    }

};

const aGame = {
    gName: 'car game',
};

//The bindGame mathod is used to create new function

const bindGame = game.gInfo.bind(aGame);
console.log(game.gInfo());
console.log(bindGame());



/*

function Square(num) {
    return num * num;
}
/**
 * Name: memoSqr()
 * This function creates a clouser to implesment memorisation (chachin results)
 * It initilizes an empty object cache to stare previously calculated square!
 * 
 */
/*
function memoSqr() {
    let cache = {};
    return function optimizedSqr(num) {
        if(num in cache) {
            console.log('Returning from Cache');
            console.log(cache);
            return cache[num];
        }else{
            const result = Square(num);
            cache[num] = result;
            console.log('computing Square');
            return result;
        }
    }
};

const memoSqrure  = memoSqr();
console.log(memoSqrure(4));
console.log(memoSqrure(4));
console.log(memoSqrure(4));
console.log(memoSqrure(5));
console.log(memoSqrure(5));

*/

//JavaScript Higher order Array loop
    //['', '', '', '', 1, true] [{}, {}, {}]

// const fruits = ['Mango', 'Banana', 'Orange', 'Grops'];

// // for (let fruit = 0; fruit < fruits.length; fruit++) {
// //     console.log(fruits[fruit]);
// // };

// for (const fruit of fruits) {
//     // console.log(fruit);
// };

// const myName = ('Ali Hossain')
// for (const name of myName) {
//     // console.log(`Each char is ${name}`);
// };
// const country = new Map([
//     ['Bn', 'Bangladesh'],
//     ['In', 'India'],
//     ['Pk', 'Pakistan'],
//     ['np', 'Nepal']
// ]);
//     country.set('Bu', 'Bhutan')

// // for (const key of country) {
// //     console.log(key);
// // }
// for (const [key, value] of country) {
//     // console.log(key, '$', value);
// };


// //abar

// const myCountry = {
//     Bn: 'Bangladesh',
//     In: 'India',
//     Pk: 'Pakistan',
//     Np: 'Nepal',
// };

// // for (const key of myCountry) {
// //      console.log(key);
// // };

// // for (const key in myCountry) {
// //     console.log(key, ':', myCountry[key]);
// // };

// // for (const key of Object.keys(myCountry)) {
// //     console.log(key);
// // };

// for (const key in fruits) {
//     // console.log(fruits[key]);
// };

// fruits.forEach(function(fruit){
//     // console.log(fruit);
// });
// fruits.forEach(fruit => {
//     // console.log(fruit);
// });

// function myFruit(fruit) {
//     console.log(fruit);
// };
// // fruits.forEach(myFruit);

// fruits.forEach((fruit, index, arr) => {
//     // console.log(fruits.index, arr);
// });

const stack = [
    {
        name: 'MERN Stack',
        Property: 'Mongo, Experss, React, node',
    },
    {
        name: 'Laravel',
        Property: 'JavaScript, vue, PHP, Laravel',
    },
    {
        name: 'wordpress',
        Property: 'JavaScript. vue, PhP, Laravel',
    }

];
stack.forEach(info => {
    console.log(`want to learn ${info.name}? learn this ${info.Property}`);
});



