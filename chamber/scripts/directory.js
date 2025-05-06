//let linksURL = "https://seriousmikey.github.io/wdd231/chamber/data/members.json";
let linksURL = "data/members.json";
let display = document.getElementById("businessContainer");
let cardButton = document.getElementById("cardButton");
let listButton = document.getElementById("listButton");
let businesses;

cardButton.addEventListener("click", () => {
	display.classList.add("cardMode");
	display.classList.remove("listMode");
    businesses.forEach(member => {
        member.classList.add("card");
	    member.classList.remove("list");
    })
});

listButton.addEventListener("click", () => {
	display.classList.add("listMode");
	display.classList.remove("cardMode");
    businesses.forEach(member => {
        member.classList.remove("card");
	    member.classList.add("list");
    })
});

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();

    displayLinks(data.members);
}

const displayLinks = (members) => {
    members.forEach(member => {
            let div = document.createElement("div");
            let image = document.createElement("img");
            let address = document.createElement("p");
            let phone = document.createElement("p");
            let url = document.createElement("a");

            div.classList.add("card");

            image.setAttribute("src", member.logo);
            image.setAttribute("alt", member.name);

            address.textContent = member.address;
            phone.textContent = member.phone;

            url.setAttribute("href", member.url);
            url.setAttribute("target", "_blank");
            url.textContent = "Website Url";

            div.appendChild(image);
            div.appendChild(address);
            div.appendChild(phone);
            div.appendChild(url);

            display.appendChild(div);
    });
    businesses = document.querySelectorAll("#businessContainer div");
};

getLinks();