// Autor: Mikk Vahaste
//
// Muutujad elementide jne jaoks
let grid = document.getElementsByClassName("grid")[0];
let gridSizeInput = document.getElementById("grid-size-input");
let root = document.documentElement;
let gridSize = 4;
let mouseDown = false;
let ignoreList = [];
let colorList = ["white", "red", "green", "blue", "rainbow"];
let currentColor = 0;

//
// FUNKTSIOONID
//

function generateGrid() {
	// Kui gridSizeInput elemendil on / ei ole täisarvuline väärtus ja see on vahemikus 1-32-
	if (gridSizeInput.value.length != 0) {
		if (1 <= gridSizeInput.value && gridSizeInput.value <= 32 && Number.isInteger(Number(gridSizeInput.value))) {
			// -määra väärtus gridSize muutujale
			gridSize = gridSizeInput.value;

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
		// Tee uus div
		let div = document.createElement("div");
		// Anna sellele id
		div.id = i;
		// Lisa div element grid-i
		grid.appendChild(div);
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
		target.classList.add("transparent");
	}
}

function changeColor() {
	// Suurenda värvi indeksit
	currentColor += 1;

	// Ära lase indeksil minna suuremaks kui colorList-i pikkus
	if (currentColor >= colorList.length) {
		currentColor = 0;
	}

	// Võta ära vana värv
	grid.classList.remove(grid.classList[1]);

	// Pane uus värv
	grid.classList.add(colorList[currentColor]);
}

//
// EVENTLISTENERID
//

// Kuula hiire vajutust
document.body.addEventListener("mousedown", (e) => {
	// Kui elemendi parent elemendi class on grid
	if (e.target.parentElement.className.includes("grid")) {
		// Joonista
		drawOnGrid(e.target);

		// Lisa elemendi id ignoreList-i
		ignoreList.push(e.target.id);

		mouseDown = true;
	}
});

// Kuula hiire lahti laskmist
document.body.addEventListener("mouseup", () => {
	// Tühjenda ignoreList
	ignoreList = [];

	mouseDown = false;
});

// Kuula hiire hover-it
document.body.addEventListener("mouseover", (e) => {
	if (e.target.parentElement.className.includes("grid")) {
		// Kui elemendi id ei ole tühi ja ei ole ignoreList-is ja hiire nupp on alla vajutatud
		if (e.target.id != "" && !ignoreList.includes(e.target.id) && mouseDown) {
			// Joonista
			drawOnGrid(e.target);

			// Lisa elemendi id ignoreList-i
			ignoreList.push(e.target.id);
		}
	}
});

// Kuula keyup eventi inputis
gridSizeInput.addEventListener("keydown", (e) => {
	// Ära luba 'e', miinuse, plussi ja koma vajutamist
	if ("eE-+.".includes(e.key)) {
		e.preventDefault();
	}
	// Kui nupp on enter-
	if (e.key == "Enter") {
		// -genereeri grid
		generateGrid();
	}
});

//
// MUU
//

// Genereeri esimene grid
generateGrid();
