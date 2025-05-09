//let linksURL = "https://seriousmikey.github.io/wdd231/final/data/members.json";
let linksURL = "data/items.json";
const popularItemsContainer = document.getElementById("popularItemsContainer");

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();

    populateItems(data.members);
}

function populateItems(items) {
    for (let i = 0; i < 2; i++) {
        let div = document.createElement("div");
        div.setAttribute("class", "popularItem");

        div.innerHTML = `
            <img src="${items[i].image}" alt="${items[i].name}">
            <p>${items[i].name}</p>
            `
        
            popularItemsContainer.appendChild(div);
    }
}

getLinks();