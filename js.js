const gridContainer = document.querySelector('#grid-container');

function setGrid(gridSize = 16) {
    currentSquares = document.querySelectorAll('.square');
    currentSquares.forEach((currentSquare) => {
        gridContainer.removeChild(currentSquare);
    })
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, auto)`
    for (i = 0; i < gridSize ** 2; i++) {
        const divSquare = document.createElement('div');
        divSquare.className = 'square';
        gridContainer.appendChild(divSquare);
    };
    draw();
}

function updateBackground(e) {
    e.target.style.background = 'black';
    console.log(e);
}

function draw() {
    const gridSquares = document.querySelectorAll('.square');
    gridSquares.forEach((gridSquare) => {
        gridSquare.addEventListener('mouseover', updateBackground);
    });
}


function resetGrid() {
    let gridSize = prompt('Enter grid square length: ');
    if (gridSize > 100) {
        gridSize = 100;
    };
    setGrid(gridSize);
}

let button = document.querySelector('button');
button.addEventListener('click', resetGrid);

setGrid();
