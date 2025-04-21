const gridContainer = document.querySelector(".grid-container");
const gridSizeSelector = document.querySelector(".grid-size-selector");
gridSizeSelector.addEventListener("input", (event) => {
    gridSize = event.target.value;
    createGrid(gridSize);
})

function createGrid(gridSize = 16) {
    gridContainer.innerHTML = "";

    for (let i = 0; i < gridSize; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");

        for (let j = 0; j < gridSize; j++) {
            const gridElement = document.createElement("div");
            gridElement.classList.add("grid-element");
            gridElement.addEventListener("mouseover", paintElement);

            gridRow.appendChild(gridElement);
        }

        gridContainer.appendChild(gridRow);
    }
}

function paintElement(event) {
    event.target.style.backgroundColor = "black";
}

createGrid();
