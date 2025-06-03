// cart.js
import { getCart, saveCart, getProducts, formatCurrency } from "./main.js";

function renderCart() {
    // Hiển thị danh sách sản phẩm trong giỏ hàng
}

function updateCartItem(productId, quantity) {
    // Cập nhật số lượng sản phẩm trong giỏ
}

function removeCartItem(productId) {
    // Xoá sản phẩm khỏi giỏ
}

function initCartPage() {
    renderCart();
    // Thêm event listener cho các nút cập nhật, xoá
}

window.addEventListener("DOMContentLoaded", initCartPage);
