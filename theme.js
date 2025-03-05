window.addEventListener("DOMContentLoaded", adjustHeights); // Adjust heights when the page loads
window.addEventListener("resize", adjustHeights); // Adjust heights whenever the window is resized


// Function to adjust the heights of different sections
function adjustHeights() {
  const nav = document.getElementById("nav");
  const main = document.getElementById("main");

  main.style.height = `${window.innerHeight - nav.clientHeight}px`;
}