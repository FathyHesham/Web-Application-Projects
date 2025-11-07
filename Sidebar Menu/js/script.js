const sidebar = document.querySelector(".sidebar"),
    closeButtons = document.querySelectorAll(".sidebar-button-toggle"),
    bodySection = document.querySelector("body"),
    themeButton = document.querySelector(".button-change-theme"),
    searchForm = document.querySelector(".search-form");


/**
 * ==============================================
 *            Open And Close Sidebar
 * ==============================================
 */
closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (!sidebar.classList.contains("close")) {
            sidebar.classList.add("close");
        } else {
            sidebar.classList.remove("close");
        }
    });
});

/**
 * ==============================================
 *                Change Theme
 * ==============================================
 */
themeButton.addEventListener("click", () => {
    if (!bodySection.classList.contains("dark-theme")) {
        bodySection.classList.add("dark-theme");
    } else {
        bodySection.classList.remove("dark-theme");
    }
});

/**
 * ==============================================
 *                Open Search Input
 * ==============================================
 */

searchForm.addEventListener("click", () => {
    if (sidebar.classList.contains("close")) {
        sidebar.classList.remove("close");
    }
});