// [1] Get All Selector Icons ".stars"
const starsIcon = document.querySelectorAll(".stars i");

// Load saved rating from localStorage when page loads
document.addEventListener("DOMContentLoaded", function () {
    const savedRating = localStorage.getItem("StarRating");
    if (savedRating !== null) {
        starsIcon.forEach((star, index) => {
            if (index <= savedRating) {
                star.classList.add("active");
            }
        });
    }
});

// [2] Loop Through The "Stars" Node List Using ForEach.
starsIcon.forEach(function (star, indexOne) {
    // [3] Add An Event Listener That Runs A Function When The "Click" Event Is Triggered .
    star.addEventListener("click", function () {
        // [4] Loop Through The "Stars" Node List Using ForEach Again.
        starsIcon.forEach(function (star, indexTwo) {
            // [5] Add The "Active" Class To The Clicked Star And Any Stars Wit A Lower Index,
            //     And Remove The "Active" Class Form Any Stars With A Higher Index.
            indexOne >= indexTwo ? star.classList.add("active") : star.classList.remove("active");
        });
        // Save the current rating to localStorage
        localStorage.setItem("StarRating", indexOne);
    });
});