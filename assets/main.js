// Autor: Mikk Vahaste
//
// Muutujad elementide jaoks
var searchBar = document.getElementById("search");
var grid = document.getElementsByClassName("grid-item");

// Otsingufunktsioon
function searchItems() {
    // Käib üle iga elemendi
    for (var item of grid) {
        // Kui päring on / ei ole elemendi <p></p> elemendi sees-
        if (item.getElementsByTagName("p")[0].innerHTML.includes(searchBar.value.toUpperCase())) {
            // -ära peida elementi
            item.classList.remove("hidden");
        } else {
            // -peida element
            item.classList.add("hidden");
        }
    }
}

// Event listener, et käivitata funktsioon igal klahvivajutusel, et otsimine oleks automaatne
searchBar.addEventListener("keyup", () => {
    searchItems()
});

