var searchBar = document.getElementById("search");
var grid = document.getElementsByClassName("grid-item");

searchBar.addEventListener("keyup", () => {
    searchItems()
});

function searchItems() {
    for (var item of grid) {
        console.log(searchBar.value.length)
        if (item.getElementsByTagName("p")[0].innerHTML.includes(searchBar.value.toUpperCase())) {
            item.classList.remove("hidden");
        } else {
            item.classList.add("hidden");
        }
    }
}
