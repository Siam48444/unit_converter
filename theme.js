window.addEventListener("DOMContentLoaded", adjust_heights); // Adjust heights when the page loads
window.addEventListener("resize", adjust_heights); // Adjust heights whenever the window is resized


// Function to adjust the heights of different sections
function adjust_heights() {
    const nav = document.getElementById("nav");
    const main = document.getElementById("main");
    const unit_converter_app = document.getElementById("unit_converter_app");

    // Adjust the main height
    main.style.height = `${window.innerHeight - nav.clientHeight}px`;

    // Control the edge cases
    if (unit_converter_app.getBoundingClientRect().top < nav.clientHeight * 2.2) {
        main.style.height = "auto";
    }
}