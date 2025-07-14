function Subscribe () {
    document.getElementById('text').innerHTML = 'Subscribe';
    document.getElementById('btn').innerHTML = 'Subscribe';
    document.getElementById('btn').style.backgroundColor = '#262626';
};

function like() {
    document.getElementById('like').innerHTML = ' <i class="fa-regular fa-thumbs-up"></i> Liked';
    
};

// keyPress for javaScript

function keyPress() {
    document.getElementById('text').innerHTML = 'Key Press😊';
};

// Website Load For JavaScript

// function onload() {
//     alert('Testing JavaScript Onload');
//     document.getElementById('text').innerHTML = 'Website Loaded Properly😀';
// };

//WindowResize for JavaScript

function windowResize() {
    document.getElementById('textarea').style.height = '100px';
    document.getElementById('form').style.fontFamily = 'Courier New';
    document.getElementById('form').style.color = 'red';
};
// website scrolling for javascript

function onScroll() {
    document.getElementById('text').innerHTML = 'Scrolling😊😎';
};


document.getElementById('btn').onclick = function () {
    document.getElementById('btn').innerHTML = 'Subscripbe😁 to Masum Khan'
};


// in capturing and bubbling javascript

document.getElementById('Ul').addEventListener('click', function (e) {
    console.log('Ul Clicked');
},
    true
);

document.getElementById('li').addEventListener('click', function(e) {
    console.log('Li Clicked');
},
    true 
);
