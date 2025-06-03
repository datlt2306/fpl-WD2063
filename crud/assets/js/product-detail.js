import { getProducts, getCart, saveCart, formatCurrency } from "./main.js";

function getProductIdFromURL() {
    // Lấy ID sản phẩm từ URL (query string)
}

function renderProductDetail(productId) {
    // Hiển thị chi tiết sản phẩm
}

function addToCart(productId) {
    // Thêm sản phẩm vào giỏ hàng
}

function initProductDetailPage() {
    const productId = getProductIdFromURL();
    renderProductDetail(productId);
    // Thêm event listener cho nút thêm vào giỏ
}

window.addEventListener("DOMContentLoaded", initProductDetailPage);
