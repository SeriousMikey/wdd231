const date = new Date();
const year = document.getElementById("currentYear");

year.innerHTML = `&copy;${date.getFullYear()}`;