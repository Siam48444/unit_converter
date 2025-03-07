const nav = document.getElementById("nav");
const main = document.getElementById("main");
const whole_container = document.getElementById("whole_container");
const unit_converter_app = document.getElementById("unit_converter_app");

const nav_right = document.getElementById("nav_right");


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
    main.style.height = `${window.innerHeight - nav.clientHeight}px`;

    // Control the edge cases
    if (unit_converter_app.getBoundingClientRect().top < nav.clientHeight * 2.2) {
        main.style.height = "auto";
    }
}



// Theme changing interaction
nav_right.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Store the theme in the local storage
    localStorage.setItem("theme", "dark");
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", null);
    }
});