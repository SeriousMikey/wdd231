const text = document.querySelector("#lastMod");
let modified = document.lastModified;

text.innerHTML = `Last Updated: ${modified}`;