const gridSizeSelector = document.querySelector(".grid-size-selector");
gridSizeSelector.addEventListener("input", (event) => {
    gridSize = event.target.value;
    createGrid(gridSize);
})

const randomColorMode = document.querySelector(".random-color-mode");

const gridSizeText = document.querySelector(".grid-size-text");

function createGrid(gridSize = 16) {
    if (document.body.contains(document.querySelector(".grid-container"))) {
        document.querySelector(".grid-container").remove();
    }
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("grid-container");
    document.body.appendChild(gridContainer);

    for (let i = 0; i < gridSize; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");

        for (let j = 0; j < gridSize; j++) {
            const gridElement = document.createElement("div");
            const gridElementColor = document.createElement("div");
            gridElementColor.classList.add("grid-element-color");
            gridElement.classList.add("grid-element");
            gridElementColor.addEventListener("mouseover", paintElement);
            gridElement.appendChild(gridElementColor);

            gridRow.appendChild(gridElement);
        }

        gridContainer.appendChild(gridRow);
    }

    gridSizeText.textContent = `Grid size: ${gridSize}x${gridSize}`
}

function paintElement(event) {
    let color = "black";
    if (randomColorMode.checked) {
        color = getRandomColor()
    }

    event.target.style.backgroundColor = color;
    event.target.style.opacity = Number(event.target.style.opacity) + 0.1;
}

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    return `rgb(${red} ${green} ${blue})`;
}

createGrid();
