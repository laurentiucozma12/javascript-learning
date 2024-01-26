// Canvas images tutorial | HTML5 Canvas JavaScript Tutorial [#7]
// https://www.youtube.com/watch?v=F7UnAU63xiY&list=PLN0tvDAN1yvSNbkHAwPzJ5O4pP_e2vyme&index=7

const canvas = document.getElementById('canvas');
const context = canvas.getContext("2d");

var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

canvas.style.background = '#ff8';

class Image {
    constructor(imagePath, x, y, width, height) {
        this.imagePath = imagePath;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}

function createImage(context, imagePath, x, y, width, height) {
    let myImage = document.createElement('img');
    myImage.src = imagePath;
    myImage.onload = function() {
        context.drawImage(myImage, x, y, width, height);
    }
}

let image = new Image('logo.png', 50, 50, 16 * 20, 9 * 20);
createImage(context, image.imagePath, image.x, image.y, image.width, image.height);