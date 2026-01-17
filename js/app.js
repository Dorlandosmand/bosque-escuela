// Footer animado al pasar el mouse
const footer = document.getElementById("footer");

footer.addEventListener("mouseenter", () => {
    footer.classList.add("active");
});

footer.addEventListener("mouseleave", () => {
    footer.classList.remove("active");
});
