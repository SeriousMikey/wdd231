import { showModal, showRemoveModal } from "./modal.mjs";

async function getLinks(dataLink) {
    try {
        const response = await fetch(dataLink);
        const data = await response.json();
        return data.items;
    }
    catch {
        console.log("Error getting data")
    }
    
}

async function populateItems(source, parent, canPurchase = true, itemNumber = 0 ) {
    let items;

    if (typeof source === "string") {
        items = await getLinks(source);
    } else if (Array.isArray(source)) {
        items = source;
    } else {
        console.error("Invalid source for populateItems");
        return;
    }

    const renderItem = (item, index) => {
        const div = document.createElement("div");
        div.setAttribute("class", "item");

        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}" width=${item.width} height=${item.height} loading="lazy">
            <p class="smallText">${item.width}x${item.height}</p>
            <p>${item.name}</p>
            ${canPurchase 
                ? `<button class="purchaseBtn" data-id='${JSON.stringify(item)}'>Purchase</button>`
                : `<button class="removeBtn" data-index="${index}">Remove</button>`}
        `;

        parent.appendChild(div);
    };


    if (itemNumber > 0) {
    items.slice(0, itemNumber).forEach((item, index) => renderItem(item, index));
    } else {
        items.forEach((item, index) => renderItem(item, index));
    }


    if (!canPurchase) {
        document.querySelectorAll(".removeBtn").forEach(button => {
            button.addEventListener("click", (e) => {
                const index = e.target.dataset.index;
                showRemoveModal(index);
            });
        });
    } else {
        document.querySelectorAll(".purchaseBtn").forEach(button => {
            button.addEventListener("click", (e) => {
                const itemData = JSON.parse(e.target.dataset.id);
                showModal(itemData);
            });
        });
    }
}

export { populateItems };
