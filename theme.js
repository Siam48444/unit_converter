// Adjust the heights of different sections
window.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById("nav");
    const main = document.getElementById("main");

    main.style.height = `${window.innerHeight - nav.clientHeight}px`;
});    