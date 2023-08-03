const container = document.querySelector('.container');
const createGridButton = document.querySelector('.create-grid');

function createGrid() {
    let number = prompt("Enter a number x to create an x by x grid:");
    gridNumber = number * number;
    while (gridNumber > 0) {
        let div = document.createElement('div');
        div.style.borderStyle = 'solid';
        div.style.borderWidth = '1px';
        div.style.flexBasis = `${100/number}%`;
        container.appendChild(div);
        gridNumber--;
    };
};

createGridButton.addEventListener('click', () => {
    createGrid();
})