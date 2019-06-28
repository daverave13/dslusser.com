// Set some constants
const CANVAS_BORDER_COLOR = "black";
const CANVAS_BACKGROUND_COLOR = "white";

// Set some variables
let dx = 10;
let dy = 0;
let score = 0; 

// Save the canvas to a variable
let gameCanvas = document.getElementById("gameCanvas");

let mc = new Hammer(gameCanvas);
mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

mc.on('swipeup', function(ev) {
    up();
    console.log("UP");
    
});

mc.on('swipedown', function(ev) {
    down();
    console.log('DOWN');
    
});

mc.on('swipeleft', function(ev) {
    left();
    console.log("left");
    
});

mc.on('swiperight', function(ev) {
    right();
    console.log('right');
    
});


// Get a 2d drawing context
let ctx = gameCanvas.getContext("2d");

// Draw a rectangle to fill the canvas
const drawBoard = () => {
    ctx.fillStyle = CANVAS_BACKGROUND_COLOR;
    ctx.strokeStyle = CANVAS_BORDER_COLOR;
    ctx.fillRect(0,0,gameCanvas.width, gameCanvas.height);
    ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);
}

// Define the snake
let snake = [
    {x: 150, y: 150},
    {x: 140, y: 150},
    {x: 130, y: 150},
    {x: 120, y: 150},
    {x: 110, y: 150},
];

// growSnake makes a copy of the head and adds to the ass
const growSnake = () => {
    let tail = {x: snake[0].x + dx, y: snake[0].y + dy};
    snake.push(tail);
}



const randomFood = () => {
    food = {
        x: (Math.floor(Math.random() * ((gameCanvas.width/10)))) * 10,
        y: (Math.floor(Math.random() * ((gameCanvas.height/10)))) * 10
    }
}

const drawFood = () => {
    
    ctx.fillStyle = 'lightblue';
    ctx.strokeStyle = 'darkblue';

    ctx.fillRect(food.x, food.y, 10, 10);
    ctx.strokeRect(food.x, food.y, 10, 10);
}

// Helper function to draw a part of the snake
const drawSnakePart = snakePart => {
    ctx.fillStyle = 'lightgreen';
    ctx.strokeStyle = 'darkgreen';

    ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
    ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

// Iterator to draw the whole snek
const drawSnake = () => {
    snake.forEach(drawSnakePart);
}

const advanceSnake = () => {
    head = {x: snake[0].x + dx, y: snake[0].y + dy};
    snake.unshift(head);
    snake.pop();
}

let clearScreen = () => {
    ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
}

const up = () => {
    if (dx !== 0 && dy !== -10) {
        dx = 0;
        dy = -10;
    }
}

const down = () => {
    if (dx !== 0 && dy !== 10) {
        dx = 0;
        dy = 10;
    }
}

const left = () => {
    if (dx !== -10 && dy !== 0) {
        dx = -10;
        dy = 0;
    }
}

const right = () => {
    if (dx !== 10 && dy !== 0) {
        dx = 10
        dy = 0;
    }
}

/* Sometimes two direction changes in rapid succession  would cause the second move
   to overwrite the first move and the first move wasn't being carried out at all. 
   This caused the snake head to do a 180 and collide with the body and ended the 
   game. To avoid this I added moveQueue. Every move gets pushed on to the back 
   of the queue and then the main function calls and shifts whatever move is in 
   moveQueue[0]. This ensures that each move is executed in order and solves the problem. */

let moveQueue = [right];

window.onkeydown = function(e) {
    var key = e.keyCode ? e.keyCode : e.which;
    if (key === 38) { // Up
        moveQueue.push(up);
    } else if (key === 37) { // Left
        moveQueue.push(left);
    } else if (key === 39) { // Right
        moveQueue.push(right);        
    } else if (key === 40) { // Down
        moveQueue.push(down);
    }
}

let collisionDetection = () => {
    let head = snake[0];
    let temp = snake;

    // Temp is a copy of snake, filtering snake to check if head coordinates
    // match any other coordinates of snake parts, the length of the returned
    // array should always be 1 because the head of course matches it's own 
    // position. If the length is ever greater than 1 that means the snake
    // has collided with itself.
    let selfCollision = temp.filter(function(snakePart) {
        return (snakePart.x === head.x && snakePart.y === head.y);
    });

    // This checks selfCollision length as well as boundary collision
    return (
        head.x < gameCanvas.width
            && head.y < gameCanvas.height 
            && head.x > -10 
            && head.y > -10
            && selfCollision.length === 1
    )
}

let food = {};
randomFood();

function main() {
    let head = snake[0];
    setTimeout(function onTick() {
        if (collisionDetection()) {
                clearScreen();
                drawBoard();
                drawFood();
                if (moveQueue[0]) moveQueue[0]();
                moveQueue.shift();
                advanceSnake();
                drawSnake();            
        }
        if (head.x === food.x && head.y === food.y) {
            clearScreen();
            drawBoard();
            growSnake();
            drawSnake();
            randomFood();
            document.getElementById('scoreCard').innerText = `Score: ${++score}`;          
        }   
        // Call main again
        main();
    }, 60)
}

main();