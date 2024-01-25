const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.style.background = '#ff8';

var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

class Rectangle {
    constructor(x, y, width, height, speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.dx = 1 * this.speed;
        this.dy = 1 * this.speed;
    }

    draw(context) {
        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height);
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

let square1 = new Rectangle(300, 50, 100, 100, 1);
square1.draw(context);

let update = function() {
    requestAnimationFrame(update);
    square1.update();
}

update();

class Circle {
    constructor(x, y, radius, startAngle, endAngle, ) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
    }

    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, false);
        context.stroke();
        context.closePath();
    }
}

let rectangle1 = new Rectangle(300, 100, 200, 100);
rectangle1.draw(context);

let rectangle2 = new Rectangle(100, 300, 100, 200);
rectangle2.draw(context);

let square2 = new Rectangle(400, 400, 100, 100);
square2.draw(context);

let circle1 = new Circle(300, 300, 50, 0, 2 * Math.PI);
circle1.draw(context);

let circle2 = new Circle(450, 300, 50, Math.PI, 2/4 * Math.PI);
circle2.draw(context);

let circle3 = new Circle(300, 450, 50, 0, 1.5 * Math.PI);
circle3.draw(context);