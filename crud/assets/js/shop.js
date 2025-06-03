import { fetchProducts } from "./main.js";

function formatCurrency(amount) {
    return amount.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
}

function renderProducts(products) {}

document.addEventListener("DOMContentLoaded", async () => {});
