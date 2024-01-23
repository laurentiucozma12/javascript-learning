const canvas = document.getElementById('canvas');
const context = canvas.getContext("2d");

// var canvasWidth = window.innerWidth;
// var canvasHeight = window.innerHeight;

canvas.width = 500;
canvas.height = 280;
canvas.style.background = '#ff8';

class Circle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        context.stroke();
        context.closePath();
    }
}

let circle1 = new Circle(75, 75, 50, 'red');
circle1.draw(context);

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

let square1 = new Square(150, 150, 10, 'blue');
square1.draw(context);








