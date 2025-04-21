const gridContainer = document.querySelector(".grid-container");

function createGrid() {
    for (let i = 0; i < 16; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");

        for (let j = 0; j < 16; j++) {
            const gridElement = document.createElement("div");
            gridElement.classList.add("grid-element");

            gridRow.appendChild(gridElement);
        }

        gridContainer.appendChild(gridRow);
    }
}

createGrid();
