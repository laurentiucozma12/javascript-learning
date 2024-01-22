const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

// 16x9 ratio
// canvas.width = 1024;
// canvas.height = 576;

// Function to update canvas size when the window is resized
function updateCanvasSize() {
    const parentWidth = canvas.parentElement.clientWidth;
    const calculatedHeight = (9 / 16) * parentWidth;

    // Set the canvas size
    canvas.width = parentWidth;
    canvas.height = calculatedHeight;
}

// Call the function to set initial size
updateCanvasSize();