window.addEventListener("DOMContentLoaded", adjustHeights); // Adjust heights when the page loads
window.addEventListener("resize", adjustHeights); // Adjust heights whenever the window is resized


// Function to adjust the heights of different sections
function adjustHeights() {
    const nav = document.getElementById("nav");
    const main = document.getElementById("main");
    const unit_converter_app = document.getElementById("unit_converter_app");

    // Adjust the main height
    main.style.height = `${window.innerHeight - nav.offsetHeight}px`;

    // Handle the edge cases
    if (unit_converter_app.getBoundingClientRect().top < 200) {
        main.style.height = "auto";
    }
}