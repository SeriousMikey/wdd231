const date = new Date();
const year = document.querySelector(".currentYear");

year.innerHTML = `&copy;${date.getFullYear()}`;