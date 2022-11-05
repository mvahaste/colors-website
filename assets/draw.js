// Autor: Mikk Vahaste
//
// Muutujad elementide, gridi suuruse ja css jaoks
let grid = document.getElementsByClassName("grid")[0];
let gridSizeInput = document.getElementById("grid-size-input");
let root = document.documentElement;
var gridSize = 4;

function generateGrid() {
    // Kui gridSizeInput elemendil on / ei ole täisarvuline väärtus ja see on vahemikus 1-32-
    if (gridSizeInput.value.length != 0) {
        if (1 <= gridSizeInput.value && gridSizeInput.value <= 32 && Number.isInteger(Number(gridSizeInput.value))) {
            // -määra väärtus gridSize muutujale
            gridSize = gridSizeInput.value

            // Võta ära error class, et border ei oleks punane
            gridSizeInput.classList.remove("error");
        } else {
            // -muuda gridSizeInput elemendi border punaseks
            gridSizeInput.classList.add("error");
        }
    }

    // Tee grid tühjaks
    grid.innerHTML = "";

    // Korda gridSize^2 et grid ruut
    for (var i = 0; i < gridSize ** 2; i++) {
        // Lisa div element gridi
        grid.appendChild(document.createElement("div"));
    }

    // Muuda gridi column ja row repeat väärtust
    root.style.setProperty("--grid-size", gridSize);
}

function drawOnGrid(target) {
    // Kui elemendil on / ei ole class transparent-
    if (target.classList.contains("transparent")) {
        // -võta class ära
        target.classList.remove("transparent");
    } else {
        // -lisa class
        target.classList.add("transparent")
    }
}

// Genereeri esimene grid
generateGrid()

// Kuula hiire vajutust
document.body.addEventListener("click", (e) => {
    // Kui vajutatud elemendi parentElement on grid
    if (e.target.parentElement.className.includes("grid")) {
        // Käivita funktsioon
        drawOnGrid(e.target);
    }
});