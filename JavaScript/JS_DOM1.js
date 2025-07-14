// JavaScript Document Object Model

// document.querySelector("h3").innerText = "SubScribe";
// document.querySelector("h4").innerText = "Tumi Kno Tumar Aunty Kota Manle.";


// const box = document.querySelector('.box');
// box.style.backgroundColor = 'red';
// box.style.width = '100px';
// box.style.height = '100px';
// document.getElementById('box').style.backgroundColor = 'blue';

// const menuItem = document.querySelectorAll('a');
// // menuItem[1].style.color = 'red'; 

// menuItem.forEach(function (i){
//     i.style.color = '#fff';
//     i.style.fontSize = '20px';
//     i.style.textDecoration = 'none';
//     i.style.background = 'black';
//     i.style.padding = '10px';
// })

//------------------------
// //Add Text inside tags.
// let headTitle = document.querySelector('h1');
// // headTitle.innerText = 'Masum Procoder';
// headTitle.innerText = headTitle.innerText + ' Procoder';

// //change Text

// let boxes = document.querySelectorAll('.box');
// boxes[0].innerText = 'New Text';
// boxes[1].innerText = 'New Text';

// let newNum = 1;
// for(box of boxes) {
//     box.innerText = `Box no ${newNum}`;
//     newNum++;
// }

// Create Element

let learnBtn = document.createElement('button');
learnBtn.innerText = 'Learn More';
let heroArea = document.querySelector('.hero');
heroArea.append(learnBtn); // last
// heroArea.prepend(learnBtn); //first
// heroArea.before(learnBtn); //before
// heroArea.after(learnBtn); //after


//Add Element

// function addFruits(nameFruits) {
//     const li = document.createElement('li');
//     li.innerHTML = `${nameFruits}`;
//     document.querySelector('ul').appendChild(li);
// }

// addFruits('Orange');

//Optimized code
function addFruitsOP(nameFruits) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(nameFruits));
    document.querySelector('ul').appendChild(li);
}

addFruitsOP('Orange'); 
addFruitsOP('Graps'); 


