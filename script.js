const gridSizer = document.querySelector(".sizer-button");
const borderButton = document.querySelector(".border-button");

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

// Logic to add and remove grid lines - can likely be improved but is functional
borderButton.addEventListener("click", () => {

  if(borderButton.textContent === "Remove Grid Lines") {
    gridSquare = document.querySelectorAll(".grid-square");

    gridSquare.forEach(square => {
      square.classList.remove("grid-square");
      square.classList.add("grid-square-no-border");
    })

    borderButton.textContent = "Add Grid Lines";
  } else {
    gridSquare = document.querySelectorAll(".grid-square-no-border");

    gridSquare.forEach(square => {
      square.classList.add("grid-square");
      square.classList.remove("grid-square-no-border");
    })

    borderButton.textContent = "Remove Grid Lines";
  }
});