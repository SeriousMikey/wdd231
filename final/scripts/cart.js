import { populateItems } from "./items.mjs";
import { setupModalHandlers, showClearCartModal } from "./modal.mjs";

document.addEventListener("DOMContentLoaded", () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const itemsContainer = document.querySelector(".itemsContainer");

    setupModalHandlers("remove");
    setupModalHandlers("clear");

    if (cartItems.length > 0) {
        populateItems(cartItems, itemsContainer, 0, false);

        const clearBtn = document.getElementById("clearCart");
        clearBtn.addEventListener("click", () => {
            showClearCartModal();
        });
    } else {
        itemsContainer.innerHTML = "<h3>Nothing here yet. Go buy some socks first.</h3>";
    }
});
