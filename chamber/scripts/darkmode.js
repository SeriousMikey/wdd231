const darkButton = document.querySelector(".darklight");
const body = document.querySelector("body");

darkButton.addEventListener("click", () => {
    body.classList.toggle("dark");
});