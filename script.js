const gridSizer = document.querySelector(".sizer-button");

gridSizer.addEventListener("click", () => {
  let gridSize = prompt("Enter a value to determine grid size:", "16");
  drawGrid(gridSize);
});

// I'm really proud of how simple this is <--- Was this sarcasm? I don't remember. This doesn't seem like a clean solution - but it works
function drawGrid(gridSize) {
  const container = document.querySelector(".grid");

  container.innerHTML = "";

  for(i = 0; i < gridSize; i++) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("grid-row");

    for(j = 0; j < gridSize; j++) {
      const gridSquare = document.createElement("div");
      gridSquare.classList.add("grid-square");

      let mouseDown = false;
      window.addEventListener("mousedown", () => mouseDown = true);
      window.addEventListener("mouseup", () => mouseDown = false);

      gridSquare.addEventListener("mouseover", () => {
        if(mouseDown) {
          gridSquare.classList.add("grid-square-selected");
        }
      });
      gridRow.appendChild(gridSquare);
    }
    container.appendChild(gridRow);
  }
}

drawGrid(16);
