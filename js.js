const gridContainer = document.querySelector('#grid-container');
for (i = 0; i < 16; i++) {
    const divRow = document.createElement('div');
    for (j = 0; j < 16; j++) {
        const divSquare = document.createElement('div');
        divSquare.className = 'square';
        divSquare.textContent = 'Test';
        divRow.appendChild(divSquare);
    }
    gridContainer.appendChild(divRow);
};