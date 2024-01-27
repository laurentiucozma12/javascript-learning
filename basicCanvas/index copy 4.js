// Canvas Object Interaction Events | HTML5 Canvas JavaScript Tutorial [#8]
// https://www.youtube.com/watch?v=xbdJf9MRL7A&list=PLN0tvDAN1yvSNbkHAwPzJ5O4pP_e2vyme&index=8

const canvas = document.getElementById('canvas');
const context = canvas.getContext("2d");

var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

canvas.style.background = '#ff8';
class Circle {
    constructor (x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.strokeStyle = 'grey';
        context.lineWidth = 3;
        context.fillStyle = this.color;
        context.fill();
        context.stroke();
        context.closePath();
    }

    changeColor(newColor) {
       this.color = newColor;
       this.draw(context);
    }

    clickCircle(xMouse, yMouse) {
        const distance = Math.sqrt(Math.pow((xMouse - this.x), 2) + Math.pow((yMouse - this.y), 2));
        if (distance > this.radius + context.lineWidth) {
            this.changeColor('blue');
        } else {
            this.changeColor('green');
        }
    }
}

let circle = new Circle(200, 200, 100, '#f52');
circle.draw(context);

canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    circle.clickCircle(x, y);
});
