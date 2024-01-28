// Event listeners key down key up
// Time 09:14:37 - https://www.youtube.com/watch?v=lfmg-EJ8gm4

const myBox = document.getElementById("myBox");
const cucumber = document.getElementById("cucumber");
const heart = document.getElementById("heart");
const moveAmount = 15;
let x = 0;
let y = 0;

myBox.style.top = `${y}px`;
myBox.style.left = `${x}px`;
myBox.style.width = `${x + 195}px`;
myBox.style.height = `${y + 195}px`;
xBox = myBox.style.top;
yBox = myBox.style.top;

document.addEventListener("keydown", event => {
    myBox.textContent = "😲";
    myBox.style.backgroundColor = "tomato";
});

class Person {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }
}

document.addEventListener("keyup", event => {
    myBox.textContent = "😊";
    myBox.style.backgroundColor = "lightblue";
});

document.addEventListener("keydown", event => {

    event.preventDefault();

        switch(event.key) {

            case "ArrowUp":
            case "w":
            case "W":
                y -= moveAmount;
                break;

            case "ArrowDown":
            case "s":
            case "S":
                y += moveAmount;
                break;

            case "ArrowLeft":
            case "a":
            case "A":
                x -= moveAmount;
                break;

            case "ArrowRight":
            case "d":
            case "D":

                x += moveAmount;
                break;
        }
        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
});