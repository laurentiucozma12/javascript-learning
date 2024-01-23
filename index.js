const canvas = document.getElementById('canvas');
const context = canvas.getContext("2d");

var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

// canvas.width = 500;
// canvas.height = 280;
canvas.style.background = '#ff8';

class Circle {
    constructor(x, y, radius, color, text) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.text = text;
    }

    draw(context) {
        context.beginPath();

        context.strokeStyle = this.color;
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.font = "20px Arial";
        context.fillText(this.text, this.x, this.y);
        // context.strokeText(this.text, this.x, this.y);

        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        context.lineWidth = 5;

        context.stroke();

        context.closePath();
    }
}

class Square {
    constructor(x, y, width, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.color = color;
    }

    draw(context) {
        context.fillStyle = `${this.color}`;
        context.fillRect(this.x, this.y, this.width, this.width, this.color);
    }
}

let all_circles = [];
let all_squares = [];

let createSprites = function(sprite) {
    sprite.draw(context);
}

for (let i = 0; i < 10; i++) {
    let random_x = Math.random() * canvasWidth;
    let random_y = Math.random() * canvasHeight;

    let my_circle = new Circle(random_x, random_y, 50, 'black', i);
    all_circles.push(my_circle);

    createSprites(all_circles[i]);

    random_x = Math.random() * canvasWidth;
    random_y = Math.random() * canvasHeight;
}

for (let i = 0; i < 10; i++) {
    let random_x = Math.random() * canvasWidth;
    let random_y = Math.random() * canvasHeight;

    let my_square = new Square(random_x, random_y, 50, 'purple');
    all_squares.push(my_square);

    createSprites(all_squares[i]);
}