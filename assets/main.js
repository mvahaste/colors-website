var searchBar = document.getElementById("search");
var grid = document.getElementsByClassName("grid-item");

function searchItems() {
    for (var item of grid) {
        if (item.getElementsByTagName("p")[0].innerHTML.includes(searchBar.value.toUpperCase())) {
            item.classList.remove("hidden");
        } else {
            item.classList.add("hidden");
        }
    }
}

searchBar.addEventListener("keyup", () => {
    searchItems()
});

