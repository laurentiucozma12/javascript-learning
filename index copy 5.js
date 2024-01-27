// CANVAS Creating Data Graphes & Diagrams | HTML5 Canvas JavaScript Tutorial [#9]
// https://www.youtube.com/watch?v=A5ERsm08cf8&list=PLN0tvDAN1yvSNbkHAwPzJ5O4pP_e2vyme&index=9

const canvas = document.getElementById('canvas');
const context = canvas.getContext("2d");

var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

canvas.style.background = '#ff8';

const data = [
    200,
    150,
    170,
    100,
    80,
    50,
    350,
    200,
    200,
    230,
];

const startValue = data[0];
const distance = canvas.width / data.length;
const startPoint = 0;

context.beginPath();

context.lineWidth = 3;
context.strokeStyle = '#f56';

context.moveTo(startPoint, startValue);
data.forEach( (element, index) => {
    const newDistance = startPoint + (distance * (index + 1));
    context.lineTo(newDistance, element);
});

context.lineTo(canvas.width, canvas.height);
context.lineTo(startPoint, canvas.height);
context.lineTo(startPoint, startValue);

context.fillStyle = 'gray';
context.fill();

context.stroke();
context.closePath();