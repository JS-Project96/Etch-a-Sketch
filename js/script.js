// Grid Creation

const container = document.querySelector('.grid-container');
const createGridButton = document.querySelector('.create-grid');

function createGrid() {
    let number = prompt("Enter a number X between 1-64 to create an X by X grid:");
    while (number > 64) {
        number = prompt("Enter a number X between 1-64 to create an X by X grid:");
    };

    gridNumber = number * number;
    while (gridNumber > 0) {
        let div = document.createElement('div');
        div.classList.add('grid');
        div.classList.add('toggleGrid');
        div.style.flexBasis = `${100/number}%`; // Calculates how much space each flex item should take up e.g number=10 calculates 10%
        div.addEventListener('mouseenter', changeColor);
        div.addEventListener('mousedown', changeColor);
        container.appendChild(div);
        gridNumber--;
    };
};
// function to remove the grid created when user wants a fresh grid

function removeGrid(){
    const gridSquares = document.querySelectorAll('.grid'); // loop through the Node list and remove each node
    for (let i = 0; i < gridSquares.length; i++){ 
        gridSquares[i].remove();
    };
};

// event listener to remove current grid then generate a new one on demand

createGridButton.addEventListener('click', () => {
    removeGrid();
    createGrid();
});

// function that makes the event listener to draw require mouse to be clicked down too

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function random(number) {
    return Math.floor((Math.random()*number) + 1)
}

let rgbMode = false

function changeColor(e) {
    if (e.type === 'mouseenter' & mouseDown === false){  // mousedown false breaks out of the function so no color change occurs
        return
    } else if (rgbMode === true) {
        e.target.style.background = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    } else if (eraserMode === true) {
        e.target.style.background = '#fefefe';
    } else {
        e.target.style.background = 'black';
    };
};

const rgbModeButton = document.querySelector('.rgbMode');

rgbModeButton.addEventListener('click', () => {
    if (rgbMode === false) {
        rgbMode = true;
        rgbModeButton.style.background = '#9e9e9e';
    } else {
        rgbMode = false;
        rgbModeButton.style.background = '#fefefe';
    };
});

let eraserMode = false
const eraserButton = document.querySelector('.eraser');

eraserButton.addEventListener('click', () => {
    if (eraserMode === false) {
        eraserMode = true;
        eraserButton.style.background = '#9e9e9e';
    } else {
        eraserMode = false;
        eraserButton.style.background = '#fefefe';
    };
})

function toggleGridLines() {
    const gridSquares = document.querySelectorAll('.grid');
    for (let i = 0; i < gridSquares.length; i++) {
        gridSquares[i].classList.toggle('toggleGrid');
    };
};

const toggleGridButton = document.querySelector('.toggle');

toggleGridButton.addEventListener('click', () => {
    toggleGridLines();
});

const clearGridButton = document.querySelector('.clear-button');

function clearGrid() {
    const gridSquares = document.querySelectorAll('.grid');
    for (let i = 0; i < gridSquares.length; i++) {
        gridSquares[i].style.background = 'white';
    };
};

clearGridButton.addEventListener('click', () => {
    clearGrid();
});