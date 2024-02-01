
// HTML Template: Make it with JS:
// <h1>Number: <span id='number'>0</span></h1>
// <button onclick='increment()'>+</button>
// <button onclick='decrement()'>-</button>

document.body.onload = createCounter();

function createCounter() {
    // Creating the h1 tag
    const h1 = document.createElement("h1");
    const textH1 = document.createTextNode("Number: ");
    h1.appendChild(textH1);

    // Creating the span tag
    const span = document.createElement("span");
    span.setAttribute("id", "number");
    let textSpan = document.createTextNode('0');
    span.appendChild(textSpan);
    h1.appendChild(span);

    // Creating the buttons
    const btnIncrement = document.createElement("button");
    const btnDecrement = document.createElement("button");

    const textIncrement = document.createTextNode("+");
    const textDecrement = document.createTextNode("-");

    btnIncrement.appendChild(textIncrement);
    btnDecrement.appendChild(textDecrement);

    btnIncrement.onclick = increment;
    btnDecrement.onclick = decrement;

    // Append elements to body, so we can actually see them
    document.body.appendChild(h1);
    document.body.appendChild(btnIncrement);
    document.body.appendChild(btnDecrement);

    // Create the counter
    let number = 0;

    function increment() {
        number++;
        updateNumber();
    }

    function decrement() {
        number--;
        updateNumber();
    }

    function updateNumber() {
        span.textContent = number;
    }
}