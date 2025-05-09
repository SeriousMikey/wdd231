//let linksURL = "https://seriousmikey.github.io/wdd231/final/data/catalog.json";
let linksURL = "data/catalog.json";
const popularItemsContainer = document.getElementById("popularItemsContainer");

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();

    populateItems(data.items);
}

function populateItems(items) {
    for (let i = 0; i < 3; i++) {
        let div = document.createElement("div");
        div.setAttribute("class", "item");

        div.innerHTML = `
        <a href="catalog.html">
            <img src="${items[i].image}" alt="${items[i].name}">
            <p><i>${items[i].name}</i></p>
        </a>
        `
            popularItemsContainer.appendChild(div);
    }
}

getLinks();