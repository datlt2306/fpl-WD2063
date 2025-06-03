import { getProducts, saveProducts, formatCurrency } from "./main.js";

function renderProductList() {
    // Hiển thị danh sách sản phẩm
}

function addProduct(product) {
    // Thêm sản phẩm mới
}

function updateProduct(id, updatedProduct) {
    // Cập nhật sản phẩm
}

function deleteProduct(id) {
    // Xoá sản phẩm
}

// Khởi tạo trang quản trị
function initAdminPage() {
    renderProductList();
}

// Gọi hàm khởi tạo khi trang load
window.addEventListener("DOMContentLoaded", initAdminPage);
