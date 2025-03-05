window.addEventListener("DOMContentLoaded", adjustHeights); // Adjust heights when the page loads
window.addEventListener("resize", adjustHeights); // Adjust heights whenever the window is resized


// Function to adjust the heights of different sections
function adjustHeights() {
    const nav = document.getElementById("nav");
    const main = document.getElementById("main");
    const unit_converter_app = document.getElementById("unit_converter_app");

    // Handle the edge cases
    if (unit_converter_app.getBoundingClientRect().top === nav.offsetHeight * 2) {
        alert();
        // main.style.height = "auto";
    }

    // Adjust the main hright
    main.style.height = `${window.innerHeight - nav.offsetHeight}px`;
}