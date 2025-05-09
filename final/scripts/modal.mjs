function showModal(item) {
    const modal = document.getElementById("purchaseModal");
    const modalText = document.getElementById("modalItemName");
    modalText.textContent = `Add "${item.name}" to cart?`;
    modal.dataset.item = JSON.stringify(item);
    modal.style.display = "flex";
}

function showRemoveModal(index) {
    const modal = document.getElementById("removeModal");
    const modalText = document.getElementById("removeModalText");
    modalText.textContent = `Remove this item from your cart?`;
    modal.dataset.index = index;
    modal.style.display = "flex";
}

function showClearCartModal() {
    const modal = document.getElementById("clearCartModal");
    modal.style.display = "flex";
}

function closeModal() {
    ["purchaseModal", "removeModal", "clearCartModal"].forEach(id => {
        const modal = document.getElementById(id);
        if (modal) {
            modal.style.display = "none";
        }
    });
}

function setupModalHandlers(context = "all") {
    const purchaseYes = document.getElementById("modalYes");
    const purchaseNo = document.getElementById("modalNo");
    const removeYes = document.getElementById("removeYes");
    const removeNo = document.getElementById("removeNo");
    const clearYes = document.getElementById("clearCartYes");
    const clearNo = document.getElementById("clearCartNo");

    if (context == "purchase") {
        purchaseYes?.addEventListener("click", () => {
            const modal = document.getElementById("purchaseModal");
            const item = JSON.parse(modal.dataset.item);
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            cart.push(item);
            localStorage.setItem("cart", JSON.stringify(cart));
            closeModal();
        });

        purchaseNo?.addEventListener("click", closeModal);
    }

    if (context == "remove") {
        removeYes?.addEventListener("click", () => {
            const modal = document.getElementById("removeModal");
            const index = modal.dataset.index;
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            closeModal();
            location.reload();
        });

        removeNo?.addEventListener("click", closeModal);
    }

    if (context == "clear") {
        clearYes?.addEventListener("click", () => {
            localStorage.removeItem("cart");
            closeModal();
            location.reload();
        });

        clearNo?.addEventListener("click", closeModal);
    }
}

export { showModal, showRemoveModal, showClearCartModal, closeModal, setupModalHandlers };
