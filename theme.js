const nav = document.getElementById("nav");
const main = document.getElementById("main");
const whole_container = document.getElementById("whole_container");
const unit_converter_app = document.getElementById("unit_converter_app");

const nav_right = document.getElementById("nav_right");



// Check for the theme when the page loads
const theme = localStorage.getItem("theme");
if (theme === "dark") {
    document.body.classList.add("dark");
}
else {
    document.body.classList.remove("dark");
}



// Change the theme 
nav_right.addEventListener("click", change_theme);


// Adjust heights whenever the window is resized
window.addEventListener("resize", adjust_heights); 

// Adjust heights when the page loads
window.addEventListener("DOMContentLoaded", () => {
    adjust_heights();
    whole_container.style.opacity = "1"; // Fade animation after the page loads
}); 

    
    
    
// Function to adjust the heights of different sections
function adjust_heights() { 
    // Adjust the main height
    main.style.height = `${window.innerHeight - nav.offsetHeight}px`;

    // Control the edge cases
    if (unit_converter_app.getBoundingClientRect().top < nav.offsetHeight * 2.2) {
        main.style.height = "auto";
    }
}



// Theme changing interaction
function change_theme() {
    // Toggle the theme
    document.body.classList.toggle("dark");

    // Store the theme in the local storage
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    }
    else {
        localStorage.setItem("theme", "light");
    }
};