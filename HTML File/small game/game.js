const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

// Game variables
let player = {
    x: canvas.width / 2 - 15,
    y: canvas.height - 30,
    width: 30,
    height: 30,
    speed: 5
};

let bullets = [];
let enemies = [];
let keys = {};

// Event listeners for key presses
document.addEventListener('keydown', function (e) {
    keys[e.code] = true;
});

document.addEventListener('keyup', function (e) {
    keys[e.code] = false;
});

// Game loop
function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

// Update game objects
function update() {
    // Move player
    if (keys['ArrowLeft'] && player.x > 0) {
        player.x -= player.speed;
    }
    if (keys['ArrowRight'] && player.x + player.width < canvas.width) {
        player.x += player.speed;
    }
    // Shoot bullet
    if (keys['Space']) {
        bullets.push({
            x: player.x + player.width / 2 - 2.5,
            y: player.y,
            width: 5,
            height: 10,
            speed: 7
        });
        keys['Space'] = false; // Prevent continuous shooting
    }
    // Update bullets
    for (let i = 0; i < bullets.length; i++) {
        bullets[i].y -= bullets[i].speed;
        if (bullets[i].y + bullets[i].height < 0) {
            bullets.splice(i, 1);
            i--;
        }
    }
    // Spawn enemies
    if (Math.random() < 0.02) {
        enemies.push({
            x: Math.random() * (canvas.width - 30),
            y: -30,
            width: 30,
            height: 30,
            speed: 2
        });
    }
    // Update enemies
    for (let i = 0; i < enemies.length; i++) {
        enemies[i].y += enemies[i].speed;
        if (enemies[i].y > canvas.height) {
            enemies.splice(i, 1);
            i--;
        }
    }
    // Check collisions
    for (let i = 0; i < enemies.length; i++) {
        // Player collision
        if (isColliding(player, enemies[i])) {
            alert('Game Over!');
            document.location.reload();
        }
        // Bullet collision
        for (let j = 0; j < bullets.length; j++) {
            if (isColliding(bullets[j], enemies[i])) {
                enemies.splice(i, 1);
                bullets.splice(j, 1);
                i--;
                break;
            }
        }
    }
}

// Draw game objects
function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    // Draw player
    context.fillStyle = 'green';
    context.fillRect(player.x, player.y, player.width, player.height);
    // Draw bullets
    context.fillStyle = 'yellow';
    bullets.forEach(bullet => {
        context.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
    });
    // Draw enemies
    context.fillStyle = 'red';
    enemies.forEach(enemy => {
        context.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
    });
}

// Collision detection
function isColliding(a, b) {
    return !(
        a.x + a.width < b.x ||
        a.x > b.x + b.width ||
        a.y + a.height < b.y ||
        a.y > b.y + b.height
    );
}

// Start the game loop
gameLoop();
