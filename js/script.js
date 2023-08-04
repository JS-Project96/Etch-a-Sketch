// Grid Creation

const container = document.querySelector('.grid-container');
const createGridButton = document.querySelector('.create-grid');

function createGrid() {
    let number = prompt("Enter a number X to create an X by X grid:");
    gridNumber = number * number;
    while (gridNumber > 0) {
        let div = document.createElement('div');
        div.classList.add('grid');
        div.classList.add('toggleGrid');
        div.style.flexBasis = `${100/number}%`; // Calculates how much space each flex item should take up e.g number=10 calculates 10%
        div.addEventListener('mouseenter', () => {
            div.style.background = 'black';
        });
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