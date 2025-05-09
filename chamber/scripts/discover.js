const discoverCards = document.getElementById("discoverCards");
let linksURL = "https://seriousmikey.github.io/wdd231/chamber/data/items.json";
//let linksURL = "data/items.json"

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();

    populateDiscover(data.items);
}

function populateDiscover(items) {
    items.forEach(item => {
        let div = document.createElement("div");
        div.setAttribute("class", "discoverCard");

        div.innerHTML = `
        <h2>${item.name}</h2>
        <figure>
            <img src="${item.image}" alt="${item.name}">
        </figure>
        <address>${item.address}</address>
        <p>${item.description}</p>
        <button>Learn More</button>
        `;

        discoverCards.appendChild(div);
    });
}


getLinks();