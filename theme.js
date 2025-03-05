window.addEventListener("DOMContentLoaded", adjustHeights); // Adjust heights when the page loads
window.addEventListener("resize", adjustHeights); // Adjust heights whenever the window is resized


// Function to adjust the heights of different sections
function adjustHeights() {
  const nav = document.getElementById("nav");
  const main = document.getElementById("main");
  const unit_converter_app = document.getElementById("unit_converter_app");

  main.style.height = `${window.innerHeight - nav.offsetHeight}px`;

  // Handle the edge cases
  if (true) {
    main.style.height = "auto";
  }
}