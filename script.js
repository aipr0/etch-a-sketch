//Setting intial size of the sketcher
let gridCount = 16;

function createGrid() {
    const sketcherGrid = document.querySelector('.sketcher');
    //Wipes the grid every time createGrid is run, to append new divs to draw the new grid
    sketcherGrid.innerHTML = '';

    //Quick check to limit the number of cells
    if (gridCount > 32) {
        gridCount = 32;
    }
    else if (gridCount <= 2) {
        gridCount = 2;
    }

    //For use in style.css, allows grid-template-rows and grid-template-columns to share space equally between the divs
    sketcherGrid.style.setProperty('--grid-number', gridCount);

    //Squares input for gridCount to calculate area, total number of divs needed to fill sketcher grid
    gridCount = gridCount ** 2;

    for (i = 0; i < gridCount; i++) {
        const grid = document.createElement('div');
        grid.classList.add('pinkbox');
        sketcherGrid.appendChild(grid);
    }
}

function drawOnGrid() {
    let gridCells = document.querySelectorAll('.pinkbox');

    gridCells.forEach((cell) => {
        cell.addEventListener('mouseover', function(e) {
            this.style.backgroundColor = 'black';
        })
    })
}

//Initialises the sketcher
createGrid();
drawOnGrid();

//Grabs the button, attaches a prompt and the value becomes gridCount for use in createGrid();
const userDeterminedGridCount = document.getElementById('setGridSize');
userDeterminedGridCount.addEventListener('click', function() {
   gridCount = prompt("Enter a number to determine grid size:", 16);
   createGrid();
   drawOnGrid();
});

