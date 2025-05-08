const text = document.querySelector(".lastMod");
let modified = document.lastModified;

text.innerHTML = `Last Update: ${modified}`;