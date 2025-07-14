// Get the canvas and context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Load images
const bird = new Image();
const bg = new Image();
const fg = new Image();
const pipeNorth = new Image();
const pipeSouth = new Image();

bird.src = 'images/.png';
bg.src = 'images/bg.png';
fg.src = 'images/fg.png';
pipeNorth.src = 'images/pipeNorth.png';
pipeSouth.src = 'images/pipeSouth.png';

// Some variables
let gap = 85;
let constant;

let birdX = 10;
let birdY = 150;
let gravity = 1.5;
let score = 0;

// Audio files
const fly = new Audio();
const scor = new Audio();

fly.src = 'sounds/fly.mp3';
scor.src = 'sounds/score.mp3';

// On key down
document.addEventListener('keydown', moveUp);

function moveUp() {
    birdY -= 25;
    fly.play();
}

// Pipe coordinates
let pipe = [];

pipe[0] = {
    x: canvas.width,
    y: 0
};

// Draw images
function draw() {
    ctx.drawImage(bg, 0, 0);

    for(let i = 0; i < pipe.length; i++) {
        constant = pipeNorth.height + gap;
        ctx.drawImage(pipeNorth, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeSouth, pipe[i].x, pipe[i].y + constant);

        pipe[i].x--;

        if(pipe[i].x == 125) {
            pipe.push({
                x: canvas.width,
                y: Math.floor(Math.random() * pipeNorth.height) - pipeNorth.height
            });
        }

        // Detect collision
        if(birdX + bird.width >= pipe[i].x && birdX <= pipe[i].x + pipeNorth.width &&
           (birdY <= pipe[i].y + pipeNorth.height || birdY + bird.height >= pipe[i].y + constant) ||
           birdY + bird.height >= canvas.height - fg.height) {
            location.reload(); // Reload the page
        }

        if(pipe[i].x == 5) {
            score++;
            scor.play();
        }
    }

    ctx.drawImage(fg, 0, canvas.height - fg.height);
    ctx.drawImage(bird, birdX, birdY);

    birdY += gravity;

    ctx.fillStyle = '#000';
    ctx.font = '20px Verdana';
    ctx.fillText('Score : ' + score, 10, canvas.height - 20);

    requestAnimationFrame(draw);
}

draw();
