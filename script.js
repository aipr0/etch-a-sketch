//Setting intial size of the sketcher
let gridCount = 16;

function drawGrid() {
    const sketcherGrid = document.querySelector('.sketcher');

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

drawGrid();