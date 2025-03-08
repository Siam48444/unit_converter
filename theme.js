const nav = document.getElementById("nav");
const main = document.getElementById("main");
const whole_container = document.getElementById("whole_container");

const nav_right = document.getElementById("nav_right");



// Adjust heights when the page loads
window.addEventListener("DOMContentLoaded", () => {
    // Fade animation after the page loads
    whole_container.style.opacity = "1"; 
    whole_container.style.pointerEvents = "all";
}); 



// Check for the theme when the page loads
const theme = localStorage.getItem("theme");
if (theme === "dark") {
    document.body.classList.add("dark");
}
else {
    document.body.classList.remove("dark");
}



// Change the theme 
nav_right.addEventListener("click", () => {
    // Toggle the theme
    document.body.classList.toggle("dark");

    // Store the theme in the local storage
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    }
    else {
        localStorage.setItem("theme", "light");
    }
});