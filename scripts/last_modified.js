const text = document.querySelector(".lastModified");
let modified = document.lastModified;

text.innerHTML = `Last Update: ${modified}`;