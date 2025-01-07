const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

// Toggle menu
menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active"); 
});

