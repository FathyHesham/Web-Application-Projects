// Get ListItem In ul
let listItems = document.querySelectorAll("ul li");
// Get Div "experiment"
let exp = document.querySelector(".experiment");

if (window.localStorage.getItem("color")) {
    // If This Color In Local Storage
    // [1] Add Color In Div Selector
    exp.style.backgroundColor = window.localStorage.getItem("color");
    // [2] Remove Active Class From All Selector
    listItems.forEach((items) => {
        items.classList.remove("active");
    });
    // [3] Add Active Class In Current Color
    document
        .querySelector(`[data-color="${window.localStorage.getItem("color")}"]`)
        .classList.add("active");
}

listItems.forEach((items) => {
    items.addEventListener("click", function (event) {
        // Remove Active Class From All Selector
        listItems.forEach((items) => {
            items.classList.remove("active");
        });
        // Add Active Class To current Selector
        event.currentTarget.classList.add("active");
        // Add Current Color In Local Storage
        window.localStorage.setItem("color", event.currentTarget.dataset.color);
        exp.style.backgroundColor = window.localStorage.getItem("color");
    });
});