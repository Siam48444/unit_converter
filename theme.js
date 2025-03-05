const nav = document.getElementById("nav");
const main = document.getElementById("main");

// Adjust the heights of different sections
main.style.height = `${100 - nav.clientHeight}vh`;