// Grid Creation

const container = document.querySelector('.container');
const createGridButton = document.querySelector('.create-grid');

function createGrid() {
    let number = prompt("Enter a number X to create an X by X grid:");
    gridNumber = number * number;
    while (gridNumber > 0) {
        let div = document.createElement('div');
        div.classList.add('grid');
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
    const gridSquares = document.querySelectorAll('.grid'); // loop through the Nodelist and remove each node
    for (let i = 0; i < gridSquares.length; i++){ 
        gridSquares[i].remove();
    };
};

// event listener to remove current grid then generate a new one on demand

createGridButton.addEventListener('click', () => {
    removeGrid();
    createGrid();
});