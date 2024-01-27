// Create Canvas OBJECTS with LOOPS | HTML5 Canvas JavaScript Tutorial [#6]
// https://www.youtube.com/watch?v=3ofgt7lHcrI&list=PLN0tvDAN1yvSNbkHAwPzJ5O4pP_e2vyme&index=6

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

let getDistance = function(x1, y1, x2, y2) {
    var result = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return result;
}

let all_circles = [];

let randomNumber = function(min, max) {
    var result = Math.random() * (max - min) + min;
    return result;
}

for (let i = 0; i < 10; i++) {

    var radius = 100;
    var random_x = randomNumber(radius, (canvasWidth - radius));
    var random_y = randomNumber(radius, (canvasHeight - radius));

    let circle1 = new Circle(random_x, random_y, radius, 'black', "A", 1);
    all_circles.push(circle1);

}

let updateCircle = function() {
    requestAnimationFrame(updateCircle);
    context.clearRect(0, 0, canvasWidth, canvasHeight);

    all_circles.forEach(element => {
        element.update();
    });
}

updateCircle();