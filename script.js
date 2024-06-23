const gridSizer = document.querySelector(".sizer-button");

gridSizer.addEventListener("click", () => {
  let gridSize = prompt("Enter a value to determine grid size:", "16");
  drawGrid(gridSize);
});

// I'm really proud of how simple this is
function drawGrid(gridSize) {
const container = document.querySelector(".grid");

container.innerHTML = "";

for(i = 0; i < gridSize; i++) {
  const gridRow = document.createElement("div");
  gridRow.classList.add("grid-row");

  for(j = 0; j < gridSize; j++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("grid-square");

    gridSquare.addEventListener("mouseover", () => {
        gridSquare.classList.add("grid-square-selected");
    })

    gridRow.appendChild(gridSquare);
  }
  
  container.appendChild(gridRow);
}

}

drawGrid(16);
