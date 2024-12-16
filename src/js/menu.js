const menuToggle = document.getElementById("menu-toggle");
const menuClose = document.getElementById("menu-close");
const menu = document.getElementById("menu");

// Open Menu
menuToggle.addEventListener("click", () => {
    menu.classList.add("active");
});

// Close Menu
menuClose.addEventListener("click", () => {
    menu.classList.remove("active");
});