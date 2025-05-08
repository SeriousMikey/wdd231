const date = new Date();
const year = document.querySelector(".copyright");

year.innerHTML = `&copy;${date.getFullYear()}`;