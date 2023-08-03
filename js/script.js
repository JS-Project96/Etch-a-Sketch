const container = document.querySelector('.container');
const createGridButton = document.querySelector('.create-grid');

function createGrid() {
    let number = prompt("Enter a number x to create and x by x grid:")
    while (number > 0) {
        let div = document.createElement('div');
        div.style.borderStyle = 'solid';
        div.style.borderWidth = '2px 1px';
        div.style.flex = '1';
        div.style.padding = '25px';
        container.appendChild(div);
        number--;
    };
};

createGridButton.addEventListener('click', () => {
    createGrid();
})