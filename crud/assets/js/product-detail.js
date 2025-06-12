function getProductIdFromURL() {
    return new URLSearchParams(window.location.search).get("id");
}

function renderProductDetail(productId) {
    const detailEl = document.querySelector("#product-detail");
    if (!detailEl) return;
    fetch(`https://api.fake-rest.refine.dev/products/${productId}`)
        .then((response) => {
            if (!response.ok) throw new Error("Lỗi API");
            return response.json();
        })
        .then((product) => {
            detailEl.innerHTML = `<h1 class="text-3xl font-bold mb-2">${product.name}</h1>`;
        });
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
