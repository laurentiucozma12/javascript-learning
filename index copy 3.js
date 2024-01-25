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
    constructor(x, y, radius, color, text, speed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.text = text;
        this.speed = speed;
        this.dx = 1 * this.speed;
        this.dy = 1 * this.speed;
    }

    draw(context) {
        context.beginPath();

        context.strokeStyle = this.color;
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.font = "20px Arial";
        context.fillText(this.text, this.x, this.y);
        
        context.lineWidth = 5;
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        context.stroke();
        context.closePath();
    }

    update() {
        context.clearRect(0, 0, canvasWidth, canvasHeight);
        this.draw(context);

        if ((this.x + this.radius) > canvasWidth) {
            this.dx = -this.dx;
        }

        if ((this.y + this.radius) > canvasHeight) {
            this.dy = -this.dy;
        }

        if ((this.x - this.radius) < 0) {
            this.dx = -this.dx;
        }

        if ((this.y - this.radius) < 0) {
            this.dy = -this.dy;
        }
        
        this.x += this.dx;
        this.y += this.dy;
    }
}

let circle_counter = 1;
let random_x = Math.random() * canvasWidth;
let random_y = Math.random() * canvasHeight;

let my_circle = new Circle(random_x, random_y, 50, 'black', circle_counter, 10);

my_circle.draw(context);

let update = function() {
    requestAnimationFrame(update);
    my_circle.update();
}

update();

// let createSprites = function(sprite) {
//     sprite.draw(context);
// }

// for (let i = 0; i < 1; i++) {
//     let random_x = Math.random() * canvasWidth;
//     let random_y = Math.random() * canvasHeight;

//     let my_circle = new Circle(random_x, random_y, 50, 'black', i+1);
//     all_circles.push(my_circle);

//     createSprites(all_circles[i]);
//     circle_counter++;
// }

