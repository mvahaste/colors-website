// Autor: Mikk Vahaste
//
// Muutujad elementide jaoks
var searchBar = document.getElementById("search");
var grid = document.getElementsByClassName("grid-item");
var noResultsText = document.getElementsByClassName("no-results")[0];

// Otsingufunktsioon
function searchItems() {
    // Käib üle iga elemendi
    for (var item of grid) {
        // Kui päring on / ei ole elemendi <p></p> elemendi sees-
        if (item.getElementsByTagName("p")[0].innerHTML.toUpperCase().includes(searchBar.value.toUpperCase())) {
            // -ära peida elementi
            item.classList.remove("hidden");
        } else {
            // -peida element
            item.classList.add("hidden");
        }
    }

    // Kui peidetud elemente on sama palju kui üldse elemente kokku (ehk kõik on peidetud)
    if (grid.length == document.getElementsByClassName("hidden").length) {
        noResultsText.style.display = "block";
    } else {
        noResultsText.style.display = "none";
    }
}

// Event listener, et käivitata funktsioon igal klahvivajutusel, et otsimine oleks automaatne
searchBar.addEventListener("keyup", () => {
    searchItems()
});
