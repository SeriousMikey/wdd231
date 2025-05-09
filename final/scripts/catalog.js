import { populateItems } from "./items.mjs";
import { setupModalHandlers } from "./modal.mjs";

//let linksURL = "https://seriousmikey.github.io/wdd231/final/data/catalog.json";
let linksURL = "data/catalog.json";
const itemsContainer = document.querySelector(".itemsContainer");

document.addEventListener("DOMContentLoaded", () => {
    setupModalHandlers("purchase");
    populateItems(linksURL, itemsContainer);
});