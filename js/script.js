const container = document.querySelector('.container');
const createGridButton = document.querySelector('.create-grid');

function createGrid() {
    let number = prompt("Enter a number X to create an X by X grid:");
    gridNumber = number * number;
    while (gridNumber > 0) {
        let div = document.createElement('div');
        div.classList.add('grid');
        div.style.flexBasis = `${100/number}%`;
        container.appendChild(div);
        gridNumber--;
    };
};

createGridButton.addEventListener('click', () => {
    createGrid();
});